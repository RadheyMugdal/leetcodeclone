"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useUser } from "@clerk/nextjs";
import { ChevronLeft, ChevronRight, ChevronsRight, ListMinus } from 'lucide-react'
import { Drawer } from './ui/drawer'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet'
import { Table, TableBody, TableCell, TableRow } from './ui/table'
import axios from 'axios';
import { set } from 'mongoose'
const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [problems, setProblems] = useState<any>([]);
  
  const [nextproblem, setNextproblem] = useState<any>(null);
  const [prevproblem, setPrevproblem] = useState<any>(null);
  const [currproblem, setCurrproblem] = useState<any>(null);
    const pathname=usePathname()
    const router=useRouter()
    useEffect(() => {
        console.log(pathname);
        
        const fetchProblems = async () => {
          const res = await axios.get("/api/getproblems");
          setProblems(res.data.data);
         
          
        };
        fetchProblems();
      
    }, []);
  return (
    <div className=' w-screen p-2  px-24 flex justify-between items-center  border-b  sticky '>
      
      <div className=' flex items-center gap-2 justify-center  '>
        <div className=' cursor-pointer flex gap-2 ' onClick={()=>router.push('/')}>
        <Image src="/logo.png" width={23} height={15} alt="logo" className='  ' />
        <p className=' text-xl font-bold'>Leetcode</p>
        </div>
        <div className=' flex gap-6  ml-10 '> 
            <Link href='/' className={` text-md ${pathname ==="/" ? 'text-orange-300': 'text-white' } hover:text-orange-200 `}>Home</Link>
            <Link href='/problem' className={` text-md ${pathname.startsWith("/problem") ? 'text-orange-300': 'text-white' } hover:text-orange-200 `}>Problems</Link>
        </div>
      </div>
      {
        pathname.startsWith("/problem/") ?(
          <div className=' mr-60  flex items-center gap-3 justify-center '>
            {/* <ChevronLeft className='  cursor-pointer' onClick={()=>router.push(`/problem/${prevproblem}`)} /> */}
            <Sheet >
              <SheetTrigger>
                <h1  className=' bg-[#262626]  p-1.5 text-sm flex items-center justify-center gap-2'><ListMinus width={20} />Problem list</h1>
              </SheetTrigger>
              <SheetContent side='left'>
                <SheetHeader>
                <h1 className=' text-xl font-bold text-center'>Problem list</h1>
                </SheetHeader>
                <Table>
                  <TableBody>
                    {problems.map((problem:any) => (
                      <TableRow key={problem._id} >
                        <TableCell>
                          <Link href={`/problem/${problem._id}`}>
                            <div className=' flex gap-2  justify-between items-center '>
                              <div className=' text-sm'>{problem.title}</div>
                              <div className='text-sm'>{problem.difficulty}</div>
                            </div>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </SheetContent>
            </Sheet>
            
            {/* <ChevronRight className=' cursor-pointer' onClick={()=>router.push(`/problem/${nextproblem}`)} /> */}
          
          </div>
        ):
        null
      }
      <div className=' mr-6  flex items-center justify-center '>
        {
          isSignedIn ?(
            <UserButton/>
          ):
          <button className=' bg-[#262626] text-orange-600 p-2 rounded-md text-sm' onClick={()=>router.push('/sign-in')}>Sign In</button>

        }
        
      </div>
    </div>
  )
}

export default Navbar
