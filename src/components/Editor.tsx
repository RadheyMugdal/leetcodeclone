"use client";
import React, { useEffect, useRef, useState } from 'react'
import Editor from '@monaco-editor/react';
import SelectLanguage from './SelectLanguage';
import { Code, Maximize, Play, RotateCcw } from 'lucide-react';
import axios, { all } from 'axios';
import { btoa } from 'buffer';
import TooltipCustom from './TooltipCustom';


const EditorCustom = ({data,settestCases,setTestCasesError,setIsMaximized}:{data:any,settestCases:any,setTestCasesError:any,setIsMaximized:any}) => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript")

    useEffect(()=>{
      console.log(selectedLanguage);
      
    },[selectedLanguage])
    const editorRef = useRef<any>(); 
    const [code,setCode]=useState<string>("")
    useEffect(()=>{
      setCode(data.starter_code[selectedLanguage])
    
      
      
    },[selectedLanguage])
    const onMount=(editor:any)=>{
        editorRef.current=editor;
        editor.focus();
    }
    const handleClick=async()=>{
 
      setLoading(true)
        const res:any=await axios.post("/api/compile",{code,test_code:data.test_code[selectedLanguage],language:selectedLanguage})
        if(res.status===200 && res.data.success===false){
          setTestCasesError(res.data.data.error)
  
          settestCases([])
          setLoading(false)
          return;
        }
        settestCases(res.data.test_results)
        setLoading(false)
    }
    const [loading,setLoading]=useState(false)
  return (
    <main className=' h-full w-full '>
      <div className=' p-1 bg-[#333333] flex justify-between'>
        <p className=' text-sm text-green-600 ml-5 flex gap-1 items-center'> 
        <Code width={15} />
        Code</p>
        <button className=' flex gap-1 items-center mr-5 bg-[#262626] rounded-md p-1.5 text-sm text-white' onClick={()=>handleClick()}>
          {
            loading ? <span className="loaderrun"></span> : <Play width={14} className='text-green-600 ' />
          }
          Run
        </button>
      </div>
      <div className=' w-full   p-2  flex  justify-between   '>
      <SelectLanguage setSelectedLanguage={setSelectedLanguage} />
      <div className=' mr-2 flex gap-4'>
      <TooltipCustom content='reload'>

      <RotateCcw width={14} className=' cursor-pointer' onClick={()=>setCode(data.starter_code[selectedLanguage])} />
      </TooltipCustom>
      <TooltipCustom content='maximize'>
      <Maximize width={14} className=' cursor-pointer' onClick={()=>setIsMaximized((prev:boolean)=>!prev)} />

      </TooltipCustom>
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
