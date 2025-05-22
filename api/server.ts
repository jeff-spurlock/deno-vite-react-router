import { serve } from "https://deno.land/std@0.220.1/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
};

async function handler(req: Request): Promise<Response> {
  console.log(`${req.method} ${req.url}`);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { 
      headers: corsHeaders,
      status: 204
    });
  }

  const url = new URL(req.url);
  
  try {
    const route = url.pathname.replace("/api/", "");
    console.log(`Handling route: ${route}`);
    console.log(`Request method: ${req.method}`);
    
    if (req.method === "GET") {
      try {
        const { GET } = await import(`./routes/${route}.ts`);
        const data = GET();
        console.log(`Returning data for ${route}:`, data);
        return new Response(JSON.stringify(data), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      } catch (e) {
        console.error(`Error handling route ${route}:`, e);
        return new Response(JSON.stringify({ error: "Route not found" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    } else if (req.method === "POST") {
      console.log(`Handling POST request for ${route}`);
      try {
        const routeModule = await import(`./routes/${route}.ts`);
        const requestBody = await req.json();
        
        if (requestBody satisfies (typeof routeModule)["POSTParams"]) {
          const data = routeModule.POST(requestBody);
          return new Response(JSON.stringify(data), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        } else {
          return new Response(JSON.stringify({ error: "Invalid request body" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        }
      } catch (e) {
        console.error(`Error handling route ${route}:`, e);
        return new Response(JSON.stringify({ error: "Route not found" }), {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // Handle 404
    return new Response("Not Found", { 
      status: 404,
      headers: corsHeaders
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Server error:', errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
}

// Start the server
console.log("API server running on http://localhost:8000");
await serve(handler); 