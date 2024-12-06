import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /sitemap.xml, /robots.txt (static files)
     */
    '/((?!api|_next|_static|_vercel|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // CORS Headers
  response.headers.set('Access-Control-Allow-Origin', '*')
  response.headers.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  response.headers.set(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  )

  // Security Headers
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  )
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )

  // Cache Control for Static Assets
  if (
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.includes('/images/') ||
    request.nextUrl.pathname.includes('.ico') ||
    request.nextUrl.pathname.includes('.svg')
  ) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    )
  }

  // Cache Control for HTML Pages
  if (request.nextUrl.pathname.endsWith('/')) {
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=3600, stale-while-revalidate=86400'
    )
  }

  return response
}
