import React from 'react'
import { FaAngleRight } from "react-icons/fa";

function Tc({ text, text2, text3,src }) {
    return (
        <>
            <div className='pt-[10px] px-[10px] pb-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.2)] rounded-[12px]'>
                <img src={src} alt="" className='mb-[30px]' />
                <h3 className='font-=[raleway] font-bold text-[22px] text-[#112F42] mb-[21px] ps-[20px]'>{text}</h3>
                <p className='font-[roboto] text-base font-regular text-[#495E6C] w-[267px] leading-[27px] mb-[26px] ps-[20px]'>{text2}</p>
                <button className='font-[raleway] font-semibold text-base text-[#2C83BB] inline-block ps-[20px]'>{text3}<FaAngleRight className='inline-block' />
                </button>
            </div>
        </>
    )
}

export default Tc
