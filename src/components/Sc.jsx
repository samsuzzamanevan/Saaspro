import React from 'react'

function Sc({ text1, text2, text3,src }) {
    return (
        <>
            <div className='pt-[59px] pe-[42px] ps-[30px] pb-[34px] shadow-[2px_4px_30px_rgba(0,0,0,0.2)] rounded-[16px] relative bg-white'>
                <img src="src/assets/img.png" alt="" className='py-[22px] px-[22px] bg-white rounded-full top-[-40px] left-[38%] absolute' />
                <p className='font-[roboto] font-regular text-base text-[#6E8393] w-[242px] leading-[27px]'>{text1}</p>
                <div className='flex gap-x-[18px] mt-[24px]'>
                    <div>
                        <img src={src} alt="" />
                    </div>
                    <div>
                        <h5 className='font-[raleway] font-semibold text-[#112F42] text-large mb-[7px]'>{text2}</h5>
                        <p className='font-[roboto] font-semibold text-[14px] text-[#495E6C]'>{text3}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sc
