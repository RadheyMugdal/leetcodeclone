"use client";
import { BookOpenCheck, CircleCheckBig, Dot } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { Tabs } from './ui/tabs'
import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import toast from 'react-hot-toast';

const TestCase = ({data,testCases,testCasesError}:{data:any,testCases:any,testCasesError:any}) => {
  const [alltestcasePassed,setAlltestcasePassed]=useState(false)
  useEffect(()=>{
    setAlltestcasePassed(false)
    if(!testCases){
      return
    }
    for(let i=0;i<data.test_cases?.length;i++){
      if(testCases.length===0){
        return
      }
      if(testCases[i]?.success===false ){
        setAlltestcasePassed(false)
        toast.error("Failed to pass all test cases",{
          duration:1000
        })
        setAlltestcasePassed(false)
        return
      }
    }
    setAlltestcasePassed(true)
    
      toast.success("All test cases passed",{
        duration:1000
      })
    
    
  },[testCases])
  return (
    <main className='h-full w-full bg-[#262626] rounded-md m-1 mt-0 overflow-hidden'>
      <div className=' p-1.5 bg-[#333333] rounded-md flex items-center gap-1'>
      <BookOpenCheck width={14} className=' ml-4 cursor-pointer text-green-600' />
        <p className='text-sm'>Testcase</p>
      </div>
      <div className=' w-full p-3  overflow-y-scroll '>
        {
          testCasesError && <div className=' m-3'>
          <p className=' text-xs'>Error:</p>
          <div className=' text-sm bg-[#333333] p-3  rounded-md text-white flex items-center'>
            {testCasesError}
          </div>
        </div>
        }
        
        {alltestcasePassed ? <div className=' text-green-600 flex items-center gap-2 text-sm m-3'>
          <CircleCheckBig width={20} />
          All test cases passed
        

        </div> : null}
        <Tabs defaultValue='case1'>
            <TabsList className=' flex'>
              {
                data.test_cases?.map((testCase:any,index:number)=>{
                  return (
                    <TabsTrigger 
                      key={index} 
                      value={`case${index + 1}`} 
                      className="text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center"
                    >
                      <Dot className={`${
                        !testCases || !testCases[index] 
                          ? 'text-white' 
                          : testCases[index].success 
                            ? 'text-green-600' 
                            : 'text-red-600'
                      }`} />
                      {`case${index + 1}`}
                    </TabsTrigger>
                  );
                  
                  
                })
              }
                {/* <TabsTrigger value='case1' className=' text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center '><Dot className='text-green-600'  />Case 1</TabsTrigger>
                <TabsTrigger value='case2' className=' text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center '><Dot className='text-green-600'  />Case 2</TabsTrigger>
                <TabsTrigger value='case3' className=' text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center '><Dot className='text-green-600'  />Case 3</TabsTrigger> */}
                
            </TabsList>
            { 
              data?.test_cases?.map((testCase:any,index:number)=>{
                return <TabsContent key={index} value={`case${index+1}`} className=' m-3'>
                <div>
                <p className=' text-xs'>input:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                {testCase.input}
                </div>
                <p className=' text-xs mt-3'>expected_output:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                {testCase.expected_output}
                </div>
                {
                  testCases && <div key={index} className=' mt-5'>
                    <p className=' text-xs'>output:</p>
                    <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                    { testCases && testCases[index] && testCases[index]['actual'] ? testCases[index]['actual'].toString() : ''}
                    </div>
                    </div>
                  
                }
                </div>
                </TabsContent>
              })
            }
            {/* <TabsContent value='case1' className=' m-3'>
                <div>
                <p className=' text-xs'>input:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                nums =
                [2,7,11,15]
                </div>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                target =
9
                </div>
                </div>
                <div className=' mt-5'>
                <p className=' text-xs'>output:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                nums =
                [2,7,11,15]
                </div>

                </div>
            </TabsContent>
            <TabsContent value='case2' className=' m-3'>
            <div>
                <p className=' text-xs'>input:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                nums =
                [2,7,11,15]
                </div>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                target =
9
                </div>
                </div>
                <div className=' mt-5'>
                <p className=' text-xs'>output:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                nums =
                [2,7,11,15]
                </div>

                </div>
            </TabsContent>
            <TabsContent value='case3' className=' m-3'>
            <div>
                <p className=' text-xs'>input:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                nums =
                [2,7,11,15]
                </div>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                target =
9
                </div>
                </div>
                <div className=' mt-5'>
                <p className=' text-xs'>output:</p>
                <div className=' bg-[#333333] rounded-md p-3  mt-2'>
                nums =
                [2,7,11,15]
                </div>

                </div>
            </TabsContent> */}
        </Tabs>
      </div>
    </main>
  )
}

export default TestCase
