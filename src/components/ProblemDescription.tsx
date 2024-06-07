"use client";
import { Dot, NotepadText } from 'lucide-react'
import React, { useEffect } from 'react'
import DOMPurify from 'dompurify';

const ProblemDescription = ({res}:{res:any}) => {
  const getDifficultyClass = (difficulty:string) => {
    switch(difficulty) {
      case 'easy':
        return 'text-green-500';
      case 'medium':
        return 'text-orange-500';
      case 'hard':
        return 'text-red-500';
      default:
        return '';
    }
  };
  useEffect(() => {
      const des:any=document.getElementById('des');
      des.innerHTML=res.description
  }, []);
  return (
    <main className='  h-full overflow-y-scroll w-full rounded-md m-1 bg-[#262626]'>
      <div className=' p-1 bg-[#333333] rounded-md flex items-center gap-1'>
      <NotepadText width={14}  className=' ml-3 cursor-pointer text-green-600' />
        <p className=' text-sm'>Description</p>
      </div>
      <h1 className=' text-2xl  font-bold  ml-4 mt-4'><span>{res?.problem_no}. </span>{res?.title}</h1>
      <div className='  ml-4'>
      <span className={`text-xs p-1.5 rounded-full ${getDifficultyClass(res.difficulty)} bg-zinc-700`}>{res?.difficulty}</span>
      </div>
      <p className=' text-sm   m-4 mr-14 ' id='des'>
      {/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br/> <br/> You may assume that each input would have <b>exactly one solution</b> exactly one solution, and you may not use the same element twice. <br/> <br/> You can return the answer in any order. */}
     
      </p>
      <div className=' m-4 mt-12'>
        {/* example box */}
        {
          res?.test_cases?.map((testCase:any,index:number)=>{
            return (
              <div key={index} className='mt-8'>
                <h2>Example {index+1}:</h2>
                <div className=' flex flex-col'>
                  <div className=' border-l    border-white'>
                    <div className=' ml-4 '>
                      <p><span className=' font-bold mt-2'>Input:</span><span className=' text-gray-300'>{testCase?.input}  {testCase?.target}</span></p>
                      <p><span className=' font-bold mt-2'>Output:</span><span>{testCase?.expected_output}</span></p>
                    </div>
                  </div>
                  
                </div>
              </div>
            )
          })
        }
       


        <div className=' mt-8'>
          <h2 className=' font-bold'>Constraints:</h2>
          
          <ul>
            {
              res?.constraints?.map((constraint:any,index:number)=>{
                return (
                  <li key={index} className=' text-sm  flex' >
                    
                     {constraint}
                  </li>
                )
              })
            } 
          </ul>
        </div>

      </div>

 
    </main>
  )
}

export default ProblemDescription
