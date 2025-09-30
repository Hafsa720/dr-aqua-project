import { NextRequest, NextResponse } from 'next/server';

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

    // Load the legal document
    const content = await loadLegalDocument(
      type as 'privacy-policy' | 'terms-of-service' | 'cookie-policy',
      'en', // Default to English for now
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
