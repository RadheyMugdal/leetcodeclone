import { NotepadText } from 'lucide-react'
import React from 'react'

const ProblemDescription = () => {
  return (
    <main className=' h-full w-full rounded-md m-1  bg-[#262626]'>
      <div className=' p-1 bg-[#333333] rounded-md flex items-center gap-1'>
      <NotepadText width={14}  className=' ml-3 cursor-pointer text-green-600' />
        <p className=' text-sm'>Description</p>
      </div>
      <h1 className=' text-2xl  font-bold  ml-4 mt-4'><span>1. </span>Two sum</h1>
      <div className='  ml-4'>
        <span className=' text-xs text-green-300 p-1.5 rounded-full   bg-zinc-700'>Easy</span>
      </div>
      <p className=' text-sm   m-4 mr-14 '>
      Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. <br/> <br/> You may assume that each input would have <b>exactly one solution</b> exactly one solution, and you may not use the same element twice. <br/> <br/> You can return the answer in any order.
      </p>
      <div className=' m-4 mt-12'>
        {/* example box */}
        <div className='mt-8'>
          <h2>Example 1:</h2>
          <div className=' flex flex-col'>
            <div className=' border-l    border-white'>
              <div className=' ml-4 '>
                <p><span className=' font-bold mt-2'>Input:</span></p>
                <p><span className=' font-bold mt-2'>Output:</span></p>
              </div>
            </div>
            
          </div>
        </div>
        {/* example box */}
        <div className='mt-8'>
          <h2>Example 2:</h2>
          <div className=' flex flex-col'>
            <div className=' border-l    border-white'>
              <div className=' ml-4 '>
                <p><span className=' font-bold mt-2'>Input:</span></p>
                <p><span className=' font-bold mt-2'>Output:</span></p>
              </div>
            </div>
            
          </div>
        </div>
        {/* example box */}
        <div className=' mt-8'>
          <h2>Example 3:</h2>
          <div className=' flex flex-col'>
            <div className=' border-l    border-white'>
              <div className=' ml-4 '>
                <p><span className=' font-bold mt-2'>Input: </span><span className=' text-gray-300'>nums = [2,7,11,15], target = 9</span></p>
                <p><span className=' font-bold mt-2'>Output: </span><span>[0,1]</span></p>
              </div>
            </div>
            
          </div>
        </div>


        <div className=' mt-8'>
          <h2 className=' font-bold'>Constraints:</h2>
          <ul>

          </ul>
        </div>

      </div>
    </main>
  )
}

export default ProblemDescription
