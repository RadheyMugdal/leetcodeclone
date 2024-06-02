// @ts-ignore
import HackerEarth from "hackerearth-node";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest){
    const { code } = await req.json();
    var hackerEarth:any=new HackerEarth("7c65a588bff92c18efd377e02a82d9779ca914b9");
    var config:any={};
    config.time_limit=1;  //your time limit in integer
    config.memory_limit=323244;  //your memory limit in integer
    config.source=code;  //your source code for which you want to use hackerEarth api
    config.input="";  //input against which you have to test your source code
    config.language="py"; //optional choose any one of them or none
    hackerEarth.compile(config,function(err:any,data:any){
        if(err){
            console.log(err);
            NextResponse.json({error:err,status:404});
            
        }else{
            console.log(data);
            NextResponse.json({data:data,status:200});
            
        }
    });
    return NextResponse.json({status:200});
}