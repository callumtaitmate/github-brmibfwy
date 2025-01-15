import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request) {
  // update user's auth session
  return await updateSession(request);
}

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  console.log(user.aud);

  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/todos", req.url));
  }

  if (!user && req.nextUrl.pathname !== "/") {
    res = NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
