export const config = {
  runtime: 'edge',
};

export function GET(request: Request) {
  return Response.json({ message: 'Hello from Vercel!'});
}
