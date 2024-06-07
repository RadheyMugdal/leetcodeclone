
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'
import Spline from '@splinetool/react-spline/next';
import Typewritting from '@/components/Typewritting'
import Homepagebg from '@/components/Homepagebg'

const page = () => {
   
  return (
    <div className='flex flex-col w-screen  justify-center h-screen ' id='' >
      <div className=' flex w-full h-full '>

        {/* <Image src="/problem.png" width={650} height={850} alt="logo" className='  ' /> */}
        <Homepagebg/>
      
      <div className=' w-[50%] h-full flex flex-col items-center justify-center  p-7 '>
      <h1 className=' text-6xl font-bold'>Let's <span className='text-orange-500'>
      
          {/* <Typewriter
            words={['Learn', 'Solve', 'Code', 'Prepare']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
     
          /> */}
          <Typewritting/>
        </span></h1>
        <p className=' text-gray-400  m-16 text-center'>Solve a variety of problems to prepare for technical interviews and improve your coding abilities.</p>
        <br />
        <br />
        <br />
        <p className=' text-orange-500'>Ready to take on a challenge? </p>
        <Link href="/problem" className='   mt-6 bg-orange-500 p-3 rounded-md'>Get Started</Link>
      </div>
      
      </div>
    </div>
  )
}

export default page
