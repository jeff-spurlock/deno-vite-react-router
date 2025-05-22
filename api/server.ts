import { serve } from "https://deno.land/std@0.220.1/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Example data store (replace with your actual data source)
const data = {
  items: [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ],
};

async function handler(req: Request): Promise<Response> {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const url = new URL(req.url);
  
  try {
    // Example API endpoints
    if (url.pathname === "/api/items") {
      if (req.method === "GET") {
        return new Response(JSON.stringify(data.items), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Handle 404
    return new Response("Not Found", { status: 404 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}

// Start the server
console.log("API server running on http://localhost:8000");
await serve(handler); 