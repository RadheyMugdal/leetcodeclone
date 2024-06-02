"use client";
import Split from 'react-split';
import React from 'react';
import EditorCustom from '@/components/Editor';
import ProblemDescription from '@/components/ProblemDescription';
import TestCase from '@/components/TestCase';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <div className='h-screen flex p-1'>
      <ResizablePanelGroup direction='horizontal'>
        <ResizablePanel defaultSize={50} >
        <div className='h-screen  rounded-md '>
          <ProblemDescription/>
        </div>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel >
          <ResizablePanelGroup direction='vertical'>
            <ResizablePanel defaultSize={70}>
              <div className='h-full  bg-[#262626] rounded-md m-1 flex-grow overflow-hidden'>
                <EditorCustom />
              </div>
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel>
              <div className='h-full  flex-grow'>
                <TestCase/>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        
      </ResizablePanelGroup>

    </div>
  );
}

export default Page;
