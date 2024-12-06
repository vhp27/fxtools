import { NextResponse } from 'next/server'
import { calculators } from '@/config/calculators'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://traderlight.app'
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const calculatorPages = Object.keys(calculators).map(slug => `/calculator/${slug}`)
  const allPages = [...staticPages, ...calculatorPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `
    )
    .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
