import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// For demo purposes - in production, use proper JWT validation
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Protected routes
  const adminRoutes = ['/admin']
  const brandRoutes = ['/brand']
  
  const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route))
  const isBrandRoute = brandRoutes.some(route => pathname.startsWith(route))

  // For demo - in production, validate JWT from cookies/headers
  if (isAdminRoute || isBrandRoute) {
    // In a real app, you would validate the JWT token here
    // For demo purposes, we'll redirect to login
    const authCookie = request.cookies.get('auth')
    
    if (!authCookie) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/brand/:path*']
}