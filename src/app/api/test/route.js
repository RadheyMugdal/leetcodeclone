import { NextRequest } from "next/server";

export async function POST(request){
    const {data}=await request.json();
    return new Response(data);
}