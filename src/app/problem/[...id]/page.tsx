"use client";
import Split from 'react-split';
import React, { useEffect, useState } from 'react';
import EditorCustom from '@/components/Editor';
import ProblemDescription from '@/components/ProblemDescription';
import TestCase from '@/components/TestCase';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import axios from 'axios';
import { set } from 'mongoose';

const Page = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<any>(null);
  const [testCases,setTestCases]=useState<any>(null);
  const [testCasesError,setTestCasesError]=useState<any>(null);
  const [isMaximized,setIsMaximized]=useState(false);
  
  useEffect(()=>{
    const fetchProblem = async () => {
      const res:any = await axios.get(`/api/getproblem?_id=${params.id}`);
      if(res.success===false){
        setError(res.message);
        return null;
      }
      if(res.data===null){
        setError('No problem found');
        return null;
      }
      setLoading(false);
      setData(res.data.data);
    };
    fetchProblem();

  },[])
  useEffect(()=>{
    console.log(isMaximized)
    
  },  [isMaximized])

  if(error){
    return <div>Error...</div>
  }
  if(loading){
    return (
      <main  className=' w-screen h-screen flex items-center justify-center'>
        <span className="loader"></span>
      </main>
    )
  }
  if(!data){
    return(
      <main  className=' w-screen h-screen flex items-center justify-center'>
        <span className="loader"></span>
      </main>
    )
  }
  return (
    <div className=' flex p-1 h-screen'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel   hidden={isMaximized}>
        <div className='h-screen  rounded-md   overflow-y-scroll  '>
          <ProblemDescription res={data} />
        </div>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel >
          <ResizablePanelGroup direction='vertical'>
            <ResizablePanel defaultSize={70}>
              <div className='h-full  bg-[#262626] rounded-md m-1 flex-grow overflow-hidden'>
                <EditorCustom data={data}  settestCases={setTestCases} setTestCasesError={setTestCasesError} setIsMaximized={setIsMaximized} />
              </div>
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel>
              <div className='h-full  flex-grow'>
                <TestCase data={data} testCases={testCases} testCasesError={testCasesError} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        
      </ResizablePanelGroup>

    </div>
  );
}

export default Page;
