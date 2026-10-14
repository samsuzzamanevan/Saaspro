import React from 'react'

function LeftSidedPeragraph({text,type,num}) {
  return (
    <>
      {
        type
        ?<p className='font-[roboto] text-base font-regular w-[557px] text-[#ffffff]'>{text}</p>
        :
        num == 0
        ?<p className='font-[roboto] text-base font-regular w-[443px] text-[#495E6C] leading-[27px] mt-[27px]'>{text}</p>:
        <p className='font-[roboto] text-base font-regular w-[557px] text-[#495E6C] leading-[27px] mt-[43px] mb-[32px]'>{text}</p>
        
    
      
        
        
      }
    </>
  )
}

export default LeftSidedPeragraph
