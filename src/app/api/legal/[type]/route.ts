import { NextRequest, NextResponse } from 'next/server';

import { contentConfig } from '@/content/config';
import { loadLegalDocument } from '@/lib/markdown';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> },
) {
  try {
    const { type } = await params;

    // Validate document type
    const validTypes = ['terms-of-service', 'privacy-policy', 'cookie-policy'];
    if (!validTypes.includes(type)) {
      return NextResponse.json(
        { error: 'Invalid document type' },
        { status: 400 },
      );
    }

    // Determine requested language via query param (e.g. ?lang=ur) and
    // validate against supported languages. Fall back to configured fallback.
    const requestedLang = request.nextUrl.searchParams.get('lang');
    const supported = contentConfig.supportedLanguages;
    const lang =
      requestedLang && supported.includes(requestedLang as any)
        ? (requestedLang as any)
        : contentConfig.fallbackLanguage;

    // Load the legal document in the requested language (will throw if missing,
    // and loader itself will fall back if necessary).
    const content = await loadLegalDocument(
      type as 'privacy-policy' | 'terms-of-service' | 'cookie-policy',
      lang,
    );

    // Return the content
    return NextResponse.json(content, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error loading legal document:', error);
    return NextResponse.json(
      { error: 'Failed to load document' },
      { status: 500 },
    );
  }
}
