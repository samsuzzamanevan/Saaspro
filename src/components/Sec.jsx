import React from 'react'
import { FaAngleRight } from "react-icons/fa";


function Sec({ text1, text2, text3, text4, text5, src, src2 }) {
    return (
        <>
            <div className='p-[10px] shadow-[0_0_25px_rgba(0,0,0,0.2)] rounded-[12px]'>
                <img src={src2} alt="" className='mb-[21px]' />

                <div className='px-[20px] pb-[20px]'>
                    <h5 className='font-[raleway] font-bold text-large text-[#112F42] mb-[26px]'>{text1}</h5>

                    <div className='flex items-center gap-x-[24px] mb-[19px]'>
                        <div className='flex items-center gap-x-[10px]'>
                            <img src={src} alt="" />
                            <p className='roboto text-[14px] font-bold text-[#112F42] align-center' >{text2}</p>
                        </div>
                        <div className='flex items-center gap-x-[8px]'>
                            <img src="src/assets/Vector.png" alt="" className='w-[20px] h-[20px]' />
                            <p className='font-[roboto] font-regular text-[14px] text-[#112F42]'>{text3}</p>
                        </div>
                    </div>
                    <p className='font-[roboto] font-regular text-base text-[#495E6C] leading-[27px] w-[296px] mb-[24px]'>{text4}</p>
                    <button className='font-[raleway] font-semibold text-base text-[#2C83BB] inline-block'>{text5} <FaAngleRight className='inline-block' /> </button>
                </div>



            </div>
        </>
    )
}

export default Sec
