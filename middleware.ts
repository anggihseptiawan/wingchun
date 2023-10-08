import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export const config = {
  matcher: ["/auth/:path*", "/", "/bookmark", "/contact", "/movie"],
}

export function middleware(request: NextRequest) {
  const isHasLoggedIn = request.cookies.has("isLoggedIn")
  if (isHasLoggedIn) {
    if (request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/", request.url))
    }
  } else {
    if (!request.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
  }
}
