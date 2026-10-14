import React from 'react'
import { FaCheck } from "react-icons/fa";


function List({text}) {
  return (
    <>
      <li className='block font-[roboto] font-regular text-base text-[#495E6C] mt-[28px]'><FaCheck className='inline-block text-[#2C83BB] me-[20px]'/>{text}</li>
    </>
  )
}

export default List
