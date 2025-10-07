// app/api/status/route.js
export async function GET(request) {
  return Response.json({ status: 'ok' });
}
