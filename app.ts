import { cache } from "https://deno.land/x/cache/mod.ts";

const file = await cache("https://jsonplaceholder.typicode.com/posts");

const text = await Deno.readTextFile(file.path);

const getEncoder =new TextEncoder();
const _encodedText =  getEncoder.encode(text);
const data = await Deno.writeFile("jsonFile.json", _encodedText);
console.log(text);