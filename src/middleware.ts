import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyToken } from './lib/auth'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  console.log('Request URL:', request.url);
  console.log('Token:', token);

  if (!token || !verifyToken(token)) {
    console.log('Redirecting to /login');
    return NextResponse.redirect(new URL('/login', request.url));
    // return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/change-password'],
}