// import { atob } from "buffer";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req:NextRequest){
//     const {code}=await req.json();
//     console.log(code);
    
//     const data={
//         source_code: code,
//         language_id: 52,
//         stdin: "",
//         expected_output: "hello"
//     }
    
//     const res:any=await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=false&fields=*",
//         {
//             method:"POST",
//             body:JSON.stringify(data),
//             headers:{
//                 "x-rapidapi-key":"eb8dbb6bc8msh026655cc3ddcdbap1f67ddjsn734a14ec4a6e",
//                 "Content-Type":"application/json",
//                 "x-rapidapi-host":"judge0-ce.p.rapidapi.com"
//             }
//         }
//     )
//     const {token}=await res.json();
//     const res2=await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=true&fields=stdout,stderr,status_id,language_id,compile_output`,
//         {
//             method:"GET",
//             headers:{
//                 "x-rapidapi-key":"eb8dbb6bc8msh026655cc3ddcdbap1f67ddjsn734a14ec4a6e",
//                 "x-rapidapi-host":"judge0-ce.p.rapidapi.com",
//                 "Content-Type":"application/json",
//             }
//         }
//     )
//     const data1:any=await res2.json();
//     const data2:any={
//         output:atob(data1.stdout),
//         error:atob(data1.stderr),
//         status:data1.status_id,
//         language:data1.language_id,
//         compile_output:atob(data1.compile_output)
//     }
//     console.log(data2);
    
//     return NextResponse.json({data2});
// }

import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { LANGUAGE_VERSION } from '@/lib/constants';

export async function POST(req: NextRequest) {
    const { code ,test_code,language} = await req.json();

    
   
    const version=LANGUAGE_VERSION[language]
    let fullcode;
    if(language==="javascript" || language==="python" || language==="c++"){
       fullcode=code+"\n"+test_code
    }else{
      fullcode=test_code+"\n"+code
    }
    console.log(fullcode);
    
    const response = await axios.post("https://emkc.org/api/v2/piston/execute", {

        "language": language,
        "version": version,
        "files": [
          {
            "content": fullcode,
            
          }
        ],
      });

    // Custom serializer to remove circular references
    const getCircularReplacer = () => {
      const seen = new WeakSet();
      return (key:any, value:any) => {
        if (typeof value === "object" && value !== null) {
          if (seen.has(value)) {
            return;
          }
          seen.add(value);
        }
        return value;
      };
    };
    console.log(response.data);
    
    if(response.data.run.code===1){
      console.log("before return");
      
      return NextResponse.json({status:200,data:{output:"",error:response.data.run.stderr},success:false});
    
      
    }
    console.log("afer return");
    
    const results = response.data.run.stdout.split("\n");
console.log(results);
let final_results:any = [];

// Function to parse expected and actual values
function parseValue(value:any) {
  try {
    // Try to parse JSON
    return JSON.parse(value);
  } catch (e) {
    // If JSON.parse fails, return the value as a string
    return value;
  }
}
if(results.length===0 ){
  return NextResponse.json({status:200,data:{output:"",error:"",success:false},test_results:[]});
}
results.forEach((result:any) => {
  if (result.trim() !== '') {
    // Use regex to extract the expected and actual values
    const match = result.match(/Expected: (.+), Actual: (.+)/);
    if (match) {
      const [, expectedStr, actualStr] = match;
      const expected = parseValue(expectedStr);
      const actual = parseValue(actualStr);

      if (JSON.stringify(expected) === JSON.stringify(actual)) {
        final_results.push({ expected: expected, actual: actual, success: true });
      } else {
        final_results.push({ expected: expected, actual: actual, success: false });
      }
    } else {
      console.warn(`No match found for result: ${result}`);
    }
  }
});


console.log(final_results);

    
    // Serialize the response data
    const responseData = JSON.parse(JSON.stringify(response, getCircularReplacer()));

    // console.log(responseData.data);


    return NextResponse.json({ data: responseData,test_results:final_results,success:true });
}