export default async (request, context) => {
    return new Response("Hello from the Edge Function!", { headers: { "content-type": "text/html" } });
  };
  