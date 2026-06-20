import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

// Handles locale detection (Accept-Language + NEXT_LOCALE cookie) and redirects
// bare paths to the resolved locale prefix.
export default createMiddleware(routing)

export const config = {
  // Skip API routes, Next internals and any path with a file extension (assets).
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
