import React from 'react'

function CenterHeading1({text,type,num}) {
  return (
    <>
    {
        type
        ?<h1 className='text-center font-[raleway] text-[36px] font-bold text-[#112F42] w-[378px] mx-auto mb-[27px] leading-[48px] '>{text}</h1>
        :
        num == '0'
        ?<h1 className='text-center font-[raleway] text-[36px] font-bold text-[#112F42] mb-[37px] '>{text}</h1>:
        <h1 className='text-center font-[raleway] text-[36px] font-bold text-[#112F42] mb-[58px] '>{text}</h1>
    }

    </>
  )
}

export default CenterHeading1
