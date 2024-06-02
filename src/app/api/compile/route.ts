import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    const { code } = await req.json();
    console.log(code);
    
    return {
        body: code,
    }
}