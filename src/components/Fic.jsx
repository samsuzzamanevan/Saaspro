import React from 'react'
import List from './List';
import Button from './button';


function Fic({text1,text2,text3,text4,text5,text6,text7}) {
  return (
    <>
      <div className='bg-[#F3F3F3] px-[30px] pt-[50px] pb-[40px] rounded-[10px]'>
        <h4 className='font-[raleway] font-bold text-[22px] text-[#112F42]'>{text1}</h4>
        <h1 className='font-[inter] font-bold text-[48px] text-[#112F42] border-b border-[#2C83BB] w-[306px] py-[15px] px-[3px]'>{text2}<span className='font-[roboto] font-semibold text-base text-[#6E8393] ms-[3px]'>{text3}</span></h1>
        <ul className='mt-[8px] mb-[36px]'>
          <List text= {text4} />  
          <List text= {text5} />  
          <List text= {text6} />  
          <List text= {text7} />  
        </ul>
        <Button textcontent='Try for Free'/>
      </div>
    </>
  )
}

export default Fic
