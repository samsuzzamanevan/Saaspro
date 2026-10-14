import React from 'react'
import '../index.css'
import { HiChevronDown } from "react-icons/hi";


function List({text,type}) {
  return (
    <>
      {
        type
        ?
        <li className='text-base font-[inter] font-[500] inline-block text-first'>{text} <HiChevronDown className='align-middle inline-block ms-[-3px]' /></li> 
        :<li className='text-base font-[inter] font-[500] text-first'>{text}</li>
      }
    </>
  )
}

export default List
