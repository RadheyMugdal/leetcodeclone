import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
   

const TooltipCustom = ({content,children}:{content:string,children:React.ReactNode}) => {
  return (
    <TooltipProvider   >
      <Tooltip  >
        <TooltipTrigger asChild >{children}</TooltipTrigger>
        <TooltipContent side='bottom'  >{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipCustom
