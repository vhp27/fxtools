import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event))
})

async function handleEvent(event) {
  try {
    // Try to get the asset from KV
    let response = await getAssetFromKV(event)

    // Add security headers
    response = new Response(response.body, response)
    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Feature-Policy', 'none')

    return response
  } catch (e) {
    // Fall back to serving a 404 page
    return new Response('Not Found', { status: 404 })
  }
}
