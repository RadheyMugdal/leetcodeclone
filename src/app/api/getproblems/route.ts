import { NextRequest, NextResponse } from "next/server";
import { ProblemModel } from "../../../../models/problem.model";
import { connectDB } from "../../../../lib/DBconnect";

export async function GET(req:NextRequest){
    connectDB()
    const problems=await ProblemModel.find({})
    if(!problems) return NextResponse.json({message:"no problems",data:[],success:false,status:404})
    return NextResponse.json({message:"got problems",data:problems,success:true,status:200})
}