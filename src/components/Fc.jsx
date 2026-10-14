import React from 'react'
import { FaAngleRight } from "react-icons/fa";

function Fc({text,src,text2,text3}) {
  return (
    <>
      <div className='py-[40px] ps-[30px] pe-[64px] shadow-[2px_4px_30px_rgba(0,0,0,0.2)] rounded-[12px]'>
        <img src={src} alt="" />
        <h3 className='font-[raleway] text-[22px] font-bold text-[#112F42] my-[26px]'>{text}</h3>
        <p className='font-[roboto] font-regular text-base leading-[27px] text-[#495E6C] w-[267px] mb-[29px]'>{text2}</p>
        <button className='font-[roboto] font-regular text-base text-[#2C83BB] inline-block'>{text3}<FaAngleRight className='inline-block' /></button>
      </div>
    </>
  )
}

export default Fc
