/* 'use client'
import React, { createContext, useState } from 'react'
export let ContextCount = createContext()
export default function UseContext({children}) {
    let [Count,setCount] =useState([])
    let obj ={Count,setCount}
  return (
    <ContextCount.Provider value={obj}>
       {children}
    </ContextCount.Provider>
  )
}
 */