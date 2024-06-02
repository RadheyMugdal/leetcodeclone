"use client";
import React, { useEffect, useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import SelectLanguage from './SelectLanguage';
import { Code, Maximize, Play, RotateCcw } from 'lucide-react';
import axios from 'axios';

const EditorCustom = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")

    useEffect(()=>{
      console.log(selectedLanguage);
      
    },[selectedLanguage])
    const editorRef = useRef<any>(); 
    const [code,setCode]=useState<string>("class Main {\n" +
    "    public int twoSum() {\n" +
    "        \n" +
    "    }\n" +
    "\n" +
    "    public static void main(String[] args) {\n" +
    "        System.out.println(\"Radhey\\nMugdal\");\n" +
    "    }\n" +
    "}");
    useEffect(()=>{
      console.log(code);
      
    },[code])
    const onMount=(editor:any)=>{
        editorRef.current=editor;
        editor.focus();
    }
    const handleClick=async()=>{
      console.log("clicked");
      
        await axios.post("/api/compile",{code});
    }
  return (
    <main className=' h-full w-full '>
      <div className=' p-1 bg-[#333333] flex justify-between'>
        <p className=' text-sm text-green-600 ml-5 flex gap-1 items-center'> 
        <Code width={15} />
        Code</p>
        <button className=' flex gap-1 items-center mr-5 bg-[#262626] rounded-md p-1.5 text-sm text-white' onClick={()=>handleClick()}>
        <Play width={14} className='text-green-600 ' />
          Run
        </button>
      </div>
      <div className=' w-full   p-2  flex  justify-between   '>
      <SelectLanguage setSelectedLanguage={setSelectedLanguage} />
      <div className=' mr-2 flex gap-4'>
      <RotateCcw width={14} className=' cursor-pointer' />
      <Maximize width={14} className=' cursor-pointer' />
      </div>
      </div>
      <Editor 
      height="100%" 
      width="100%"
    // defaultLanguage="javascript" .
    language={selectedLanguage}
    defaultValue="// some comment" 
    onMount={onMount}
    theme='vs-dark' 
    value={code}  
    onChange={(value)=>setCode(value as string)}/> 
    </main>
    
  )
}

export default EditorCustom
