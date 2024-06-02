"use client"
import React from 'react'
import { Select } from './ui/select'
import { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select'

const SelectLanguage = ({ setSelectedLanguage }:{setSelectedLanguage:any}) => {
  return (
    // <Select   >
    //   <SelectTrigger className=" text-sm text-white w-[180px]">
    //     <SelectValue placeholder="Javascript"  />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectGroup>
    //       <SelectLabel>Fruits</SelectLabel>
    //       <SelectItem value="apple">Apple</SelectItem>
    //       <SelectItem value="banana">Banana</SelectItem>
    //       <SelectItem value="blueberry">Blueberry</SelectItem>
    //       <SelectItem value="grapes">Grapes</SelectItem>
    //       <SelectItem value="pineapple">Pineapple</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>
    <select 
      name="language" 
      className=' text-xs   ml-4  p-1 text-white' 
      onChange={(e) => setSelectedLanguage(e.target.value)}
    >
      <option value="javascript">JavaScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="c++">C++</option>
    </select>
  )
}

export default SelectLanguage
