export default function middleware(req) {
  return Response.redirect(
    `https://cdn.hackclub.com/rescue?url=${encodeURIComponent(req.url)}`,
    301
  );
}
