import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Get parameters from URL
    const title = searchParams.get('title') ?? 'RapidBizz';
    const description =
      searchParams.get('description') ??
      'Professional Web Development Services';
    const theme = searchParams.get('theme') ?? 'dark';
    const templateTitle = searchParams.get('templateTitle');

    // Theme-based colors
    const colors = {
      light: {
        bg: '#ffffff',
        primary: '#082856',
        secondary: '#FF8621',
        text: '#111827',
        accent: '#64748B',
      },
    };

    const currentTheme = colors[theme as keyof typeof colors] || colors.light;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: currentTheme.bg,
            backgroundImage: `
              radial-gradient(circle at 25px 25px, ${currentTheme.secondary}22 2%, transparent 0%), 
              radial-gradient(circle at 75px 75px, ${currentTheme.primary}22 2%, transparent 0%)
            `,
            backgroundSize: '100px 100px',
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
            padding: '80px',
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${currentTheme.primary}11, ${currentTheme.secondary}11)`,
            }}
          />

          {/* Logo/Brand */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                backgroundColor: currentTheme.primary,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '20px',
                boxShadow: `0 10px 25px ${currentTheme.primary}33`,
              }}
            >
              <span
                style={{ color: 'white', fontSize: '28px', fontWeight: 'bold' }}
              >
                R
              </span>
            </div>
            <span
              style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: currentTheme.text,
                letterSpacing: '-0.02em',
              }}
            >
              RapidBizz
            </span>
          </div>

          {/* Main content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '900px',
              zIndex: 1,
            }}
          >
            {templateTitle && (
              <div
                style={{
                  fontSize: '24px',
                  color: currentTheme.secondary,
                  fontWeight: '600',
                  marginBottom: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {templateTitle}
              </div>
            )}

            <h1
              style={{
                fontSize: templateTitle ? '56px' : '64px',
                fontWeight: 'bold',
                color: currentTheme.text,
                lineHeight: 1.1,
                marginBottom: '30px',
                letterSpacing: '-0.02em',
                background: `linear-gradient(135deg, ${currentTheme.text}, ${currentTheme.accent})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: '28px',
                color: currentTheme.accent,
                lineHeight: 1.4,
                fontWeight: '400',
                maxWidth: '800px',
              }}
            >
              {description}
            </p>
          </div>

          {/* Decorative elements */}
          <div
            style={{
              position: 'absolute',
              top: '50px',
              right: '50px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${currentTheme.secondary}33, ${currentTheme.primary}33)`,
              filter: 'blur(30px)',
            }}
          />

          <div
            style={{
              position: 'absolute',
              bottom: '50px',
              left: '50px',
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${currentTheme.primary}22, ${currentTheme.secondary}22)`,
              filter: 'blur(40px)',
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    // Log error in production for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error(`Failed to generate OG image: ${e.message}`);
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
