export default function middleware(req) {
  const url = new URL(req.url);
  if (url.pathname === "/") {
    return Response.redirect("https://cdn.hackclub.com", 301);
  }
  return Response.redirect(
    `https://cdn.hackclub.com/rescue?url=${encodeURIComponent(req.url)}`,
    301
  );
}
