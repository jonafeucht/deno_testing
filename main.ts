import {serve} from "https://deno.land/std/http/server.ts";

serve((_req) => new Response("Hello, world"), { port: 3000 });
console.log("Listening on http://localhost:3000");