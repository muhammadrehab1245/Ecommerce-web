import React from 'react'
import { useState } from 'react';

export const Colorbtns = ({clrs}) => {
  const hell=()=>{
    console.log('a')
  }
  return (
    <div  className="flex items-center border border-sky-400 space-x-3">
    <label   className="flex  cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
      <input onClick={hell}   type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label"/>
      <span  style={{ backgroundColor: `${clrs.color}` }} aria-hidden="true" className="h-8 w-8 rounded-full ring ring-offset-0 ring-slate-500  border-opacity-10"></span>
    </label>
    </div>
    
   
  )
}
