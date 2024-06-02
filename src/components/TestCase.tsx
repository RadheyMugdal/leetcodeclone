import { BookOpenCheck, Dot } from 'lucide-react'
import React from 'react'
import { Tabs } from './ui/tabs'
import { TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

const TestCase = () => {
  return (
    <main className='h-full w-full bg-[#262626] rounded-md m-1 mt-0 overflow-hidden'>
      <div className=' p-1.5 bg-[#333333] rounded-md flex items-center gap-1'>
      <BookOpenCheck width={14} className=' ml-4 cursor-pointer text-green-600' />
        <p className='text-sm'>Testcase</p>
      </div>
      <div className=' w-full p-3  overflow-y-scroll '>
        <Tabs defaultValue='case1'>
            <TabsList className=' flex'>
                <TabsTrigger value='case1' className=' text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center '><Dot className='text-green-600'  />Case 1</TabsTrigger>
                <TabsTrigger value='case2' className=' text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center '><Dot className='text-green-600'  />Case 2</TabsTrigger>
                <TabsTrigger value='case3' className=' text-sm bg-[#333333] p-1 m-2 rounded-md text-white flex items-center '><Dot className='text-green-600'  />Case 3</TabsTrigger>
                
            </TabsList>
            <TabsContent value='case1' className=' m-3'>
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
            </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}

export default TestCase
