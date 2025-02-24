import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Only protect /dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const token = request.cookies.get("token")

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/dashboard/:path*",
}

