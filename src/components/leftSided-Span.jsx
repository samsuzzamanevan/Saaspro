import React from 'react'

function LeftSidedSpan({text,type}) {
  return (
    <>
      {
        type
        ?<span className='font-[raleway] text-large font-bold text-[#2C83BB]'>{text}</span>
        :<span className='font-[raleway] text-large font-bold text-[#ffffff]'>{text}</span>
      }
    </>
  )
}

export default LeftSidedSpan
