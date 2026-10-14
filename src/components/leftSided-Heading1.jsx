import React from 'react'

function LeftSidedHeading1({textcontent,type,num}) {
  return (
    <>
      {
    type?
    <h1 className='font-[raleway] text-[52px] font-bold mt-[11px] mb-[40px] text-[#ffffff]'>{textcontent}</h1>:
    num== 0 
    ?<h1 className='font-[raleway] text-[36px] font-bold text-[#112F42] w-[469px]'>{textcontent}</h1>:
    <h1 className='font-[raleway] text-[36px] font-bold text-[#112F42] w-[443px]'>{textcontent}</h1>
    }
    </>
  )
}

export default LeftSidedHeading1
