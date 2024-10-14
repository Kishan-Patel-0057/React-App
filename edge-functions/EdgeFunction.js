export default async (request, context) => {
    return new Response("Hello from Netlify Edge Functions!", {
      headers: { "content-type": "text/html" },
    });
  };
  