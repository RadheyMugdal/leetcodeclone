import { Problem, ProblemModel } from './../../../../models/problem.model';
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../../../lib/DBconnect";

export async function POST(req:NextRequest){
    const {problem_no,title,description,difficulty,tags,constraints,test_cases,starter_code,test_code}=await req.json()
    if(!problem_no || !title || !description || !difficulty || !tags || !constraints || !test_cases || !starter_code || !test_code){
        return NextResponse.json({error:"Invalid request"})
    }
    const db=await connectDB()
    const starterCodeString = JSON.stringify(starter_code);
    const testCodeString = JSON.stringify(test_code);


    const problem=await ProblemModel.create({
        problem_no:problem_no,
        title:title,
        description:description,
        difficulty:difficulty,
        tags:tags,
        constraints:constraints,
        test_cases:test_cases,
        starter_code,
        test_code
    })
    console.log(problem);
    
    return NextResponse.json({message:"Problem added successfully"})
}