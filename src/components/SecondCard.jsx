import React from 'react'

function SecondCard({src,text1,text2}) {
    return (
        <>
            <div className='flex gap-x-[30px]'>
                <img src={src} alt="" />
                <div>
                    <h1 className='font-[inter] font-bold text-[30px] text-[#2C83BB]'>{text1}</h1>
                    <span className='font-[raleway] font-semibold text-base text-[#495E6C]'>{text2}</span>
                </div>
            </div>

        </>
    )
}

export default SecondCard
