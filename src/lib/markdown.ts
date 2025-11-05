/**
 * Markdown Content Utilities
 *
 * This module provides utilities for loading and rendering markdown content,
 * particularly useful for legal pages, blog posts, and documentation.
 */

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkToc from 'remark-toc';

import { contentConfig, type SupportedLanguage } from '@/content/config';

// Markdown content cache for performance
const markdownCache = new Map<string, MarkdownContent>();

/**
 * Interface for markdown content with frontmatter
 */
export interface MarkdownContent {
  content: string;
  html: string;
  metadata: {
    title?: string;
    description?: string;
    author?: string;
    date?: string;
    lastUpdated?: string;
    tags?: string[];
    slug?: string;
    draft?: boolean;
    [key: string]: unknown;
  };
  excerpt?: string;
  readingTime?: number;
  wordCount?: number;
}

/**
 * Interface for markdown file listing
 */
export interface MarkdownFile {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  lastUpdated?: string;
  tags?: string[];
  draft?: boolean;
  path: string;
}

/**
 * Load and process markdown content from file
 * @param filePath Path to the markdown file
 * @param options Processing options
 * @returns Processed markdown content
 */
export async function loadMarkdownFile(
  filePath: string,
  options: {
    includeHtml?: boolean;
    includeToc?: boolean;
    calculateReadingTime?: boolean;
  } = {},
): Promise<MarkdownContent> {
  const {
    includeHtml = true,
    includeToc = false,
    calculateReadingTime = true,
  } = options;

  const cacheKey = `${filePath}-${JSON.stringify(options)}`;

  // Return cached content if available
  if (markdownCache.has(cacheKey)) {
    const cached = markdownCache.get(cacheKey);
    if (cached) return cached;
  }

  try {
    // Read file content
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Parse frontmatter and content
    const { data: metadata, content } = matter(fileContent);

    let html = '';
    let excerpt = '';

    if (includeHtml) {
      // Configure remark processor
      const processor = remark()
        .use(remarkGfm) // GitHub Flavored Markdown
        .use(remarkHtml, { sanitize: false }); // Convert to HTML

      if (includeToc) {
        processor.use(remarkToc, { heading: 'Table of Contents' });
      }

      // Process markdown to HTML
      const processedContent = await processor.process(content);
      html = processedContent.toString();

      // Generate excerpt from first paragraph
      const paragraphs = content.split('\n\n');
      const firstParagraph = paragraphs[0];
      if (firstParagraph) {
        excerpt =
          firstParagraph.replace(/^#+\s+/, '').substring(0, 160) + '...';
      }
    }

    // Calculate reading time (average 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = calculateReadingTime
      ? Math.ceil(wordCount / 200)
      : undefined;

    const result: MarkdownContent = {
      content,
      html,
      metadata,
      excerpt: excerpt || undefined,
      readingTime,
      wordCount,
    };

    // Cache the result
    markdownCache.set(cacheKey, result);

    return result;
  } catch {
    throw new Error(`Failed to load markdown file: ${filePath}`);
  }
}

/**
 * Load legal document by type and language
 * @param documentType Type of legal document
 * @param language Language code
 * @returns Processed legal document content
 */
export async function loadLegalDocument(
  documentType: 'privacy-policy' | 'terms-of-service' | 'cookie-policy',
  language: SupportedLanguage = contentConfig.defaultLanguage,
): Promise<MarkdownContent> {
  const filePath = path.join(
    process.cwd(),
    'src/content/legal',
    language,
    `${documentType}.md`,
  );

  try {
    return await loadMarkdownFile(filePath, {
      includeHtml: true,
      includeToc: true,
      calculateReadingTime: true,
    });
  } catch (error) {
    // Fallback to default language if specified language is not available
    if (language !== contentConfig.fallbackLanguage) {
      return loadLegalDocument(documentType, contentConfig.fallbackLanguage);
    }
    throw error;
  }
}

/**
 * Get list of available legal documents
 * @param language Language code
 * @returns List of available legal documents
 */
export function getLegalDocuments(
  language: SupportedLanguage = contentConfig.defaultLanguage,
): MarkdownFile[] {
  const legalDir = path.join(process.cwd(), 'src/content/legal', language);

  try {
    const files = fs
      .readdirSync(legalDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(legalDir, file);
        const slug = file.replace('.md', '');

        try {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data: metadata } = matter(fileContent);

          return {
            slug,
            title:
              metadata.title ||
              slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
            description: metadata.description,
            date: metadata.date,
            lastUpdated: metadata.lastUpdated,
            tags: metadata.tags,
            draft: metadata.draft || false,
            path: filePath,
          };
        } catch {
          return {
            slug,
            title: slug
              .replace(/-/g, ' ')
              .replace(/\b\w/g, (l) => l.toUpperCase()),
            path: filePath,
          };
        }
      });

    return files.filter((file) => !file.draft);
  } catch {
    return [];
  }
}

/**
 * Load blog post or documentation content
 * @param slug Content slug
 * @param contentType Type of content (blog, docs, etc.)
 * @param language Language code
 * @returns Processed content
 */
export async function loadContentBySlug(
  slug: string,
  contentType: 'blog' | 'docs' = 'blog',
  language: SupportedLanguage = contentConfig.defaultLanguage,
): Promise<MarkdownContent> {
  const filePath = path.join(
    process.cwd(),
    'src/content',
    contentType,
    language,
    `${slug}.md`,
  );

  try {
    return await loadMarkdownFile(filePath, {
      includeHtml: true,
      includeToc: contentType === 'docs',
      calculateReadingTime: true,
    });
  } catch {
    // Fallback to default language
    if (language !== contentConfig.fallbackLanguage) {
      return loadContentBySlug(
        slug,
        contentType,
        contentConfig.fallbackLanguage,
      );
    }
    throw new Error(`Content not found: ${slug}`);
  }
}

/**
 * Get list of content files by type
 * @param contentType Type of content
 * @param language Language code
 * @returns List of content files
 */
export function getContentList(
  contentType: 'blog' | 'docs' = 'blog',
  language: SupportedLanguage = contentConfig.defaultLanguage,
): MarkdownFile[] {
  const contentDir = path.join(
    process.cwd(),
    'src/content',
    contentType,
    language,
  );

  try {
    const files = fs
      .readdirSync(contentDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(contentDir, file);
        const slug = file.replace('.md', '');

        try {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data: metadata } = matter(fileContent);

          return {
            slug,
            title: metadata.title || slug,
            description: metadata.description,
            date: metadata.date,
            lastUpdated: metadata.lastUpdated,
            tags: metadata.tags,
            draft: metadata.draft || false,
            path: filePath,
          } as MarkdownFile;
        } catch {
          return null;
        }
      })
      .filter((file): file is MarkdownFile => file !== null && !file.draft)
      .sort((a, b) => {
        // Sort by date if available, otherwise by title
        if (a.date && b.date) {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        return a.title.localeCompare(b.title);
      });

    return files;
  } catch {
    return [];
  }
}

/**
 * Search content by query
 * @param query Search query
 * @param contentType Type of content to search
 * @param language Language code
 * @returns Matching content files
 */
export function searchContent(
  query: string,
  contentType: 'blog' | 'docs' | 'legal' = 'blog',
  language: SupportedLanguage = contentConfig.defaultLanguage,
): MarkdownFile[] {
  const contentList =
    contentType === 'legal'
      ? getLegalDocuments(language)
      : getContentList(contentType, language);

  const lowercaseQuery = query.toLowerCase();

  return contentList.filter((file) => {
    return (
      file.title.toLowerCase().includes(lowercaseQuery) ||
      file.description?.toLowerCase().includes(lowercaseQuery) ||
      file.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  });
}

/**
 * Generate table of contents from markdown content
 * @param content Markdown content
 * @returns Table of contents structure
 */
export function generateTableOfContents(content: string): Array<{
  level: number;
  title: string;
  slug: string;
}> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: Array<{ level: number; title: string; slug: string }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1]?.length || 1;
    const title = match[2]?.trim() || '';
    const slug = title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    toc.push({ level, title, slug });
  }

  return toc;
}

/**
 * Convert markdown content to plain text (for search indexing)
 * @param content Markdown content
 * @returns Plain text content
 */
export function markdownToPlainText(content: string): string {
  return (
    content
      // Remove frontmatter
      .replace(/^---[\s\S]*?---/, '')
      // Remove headers
      .replace(/^#{1,6}\s+/gm, '')
      // Remove emphasis
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      // Remove links
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove code blocks
      .replace(/```[\s\S]*?```/g, '')
      .replace(/`([^`]+)`/g, '$1')
      // Remove images
      .replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
      // Clean up whitespace
      .replace(/\n+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
  );
}

/**
 * Clear markdown cache
 */
export function clearMarkdownCache(): void {
  markdownCache.clear();
}

/**
 * Get markdown cache statistics
 */
export function getMarkdownCacheStats(): {
  size: number;
  keys: string[];
} {
  return {
    size: markdownCache.size,
    keys: Array.from(markdownCache.keys()),
  };
}
