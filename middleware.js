import { NextResponse } from "next/server";

export function middleware(req) {
  return NextResponse.redirect(
    `https://cdn.hackclub.com/rescue?url=${encodeURIComponent(req.url)}`,
    302
  );
}
