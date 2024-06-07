import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../lib/DBconnect";
import { ProblemModel } from "../../../../models/problem.model";

export async function GET(req:NextRequest){
    const params=await req.nextUrl.searchParams
    const _id=params.get('_id')
    if(!_id) return NextResponse.json({message:"id is required",status:400,success:false})
    connectDB()
    const problem =await ProblemModel.findById(_id)
    if(!problem) return NextResponse.json({message:"problem not found",status:404,success:false})

    return NextResponse.json({message:"got problem sucessfully",data:problem,success:true,status:200})
}