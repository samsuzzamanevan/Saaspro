import React from 'react'

function Button({ textcontent, type,number }) {
    return (
        <>
            {
                type?<button className='text-base font-[inter] font-semibold text-[#ffffff] py-[10px] px-[23px] border rounded-[8px] ms-[35px]'>{textcontent}</button>:
                number == 0 
                ?<button className='font-[raleway] text-base font-semibold text-[#ffffff] py-[16px] px-[35px] bg-[#2C83BB] rounded-[5px]' >{textcontent}</button>
                :<button className='font-[raleway] text-base font-semibold text-[#ffffff] py-[20px] px-[50px] bg-[#2C83BB] rounded-[5px]' >{textcontent}</button>
            }
        </>
    )
}

export default Button
