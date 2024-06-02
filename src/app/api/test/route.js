import { NextRequest } from "next/server";

export async function GET(request){
    return new Response("Hello World");
}