"use client"
import React from 'react'
import {useTypewriter,Cursor, Typewriter} from 'react-simple-typewriter'
const Typewritting = () => {
    const {text}: any = useTypewriter({
        words:['code','solve'],
        loop:true,
        
       })
  return (
    
    <Typewriter
    words={['Learn', 'Solve', 'Code', 'Prepare']}
    loop={5}
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}

  />
  )
}

export default Typewritting
