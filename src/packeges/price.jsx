import React from 'react'
import CenterHeading1 from '../components/centerHeading1'
import Fic from '../components/Fic'

function Price() {
  return (
    <>
      <div className='pt-[113px] pb-[120px]'>
        <div className='w-[1170px] mx-auto'>
           <CenterHeading1 text='Affordable Pricing' num='0'/>
           <div className='flex items-center justify-center'>
                <span className='font-[roboto] text-large font-regular text-[#333333] me-[23px]'>Annualy</span>
                <div className='w-[90px] h-[40px] rounded-[100px] bg-[#2C83BB] relative before:w-[30px] before:h-[30px] before:bg-white before:absolute before:top-[5px] before:right-[5px] before:content-[""] before:rounded-full'></div>
                <span className='font-[roboto] text-large font-regular text-[#333333] ms-[23px]'>Monthly</span>
           </div>
           <div className='flex gap-x-[24px] justify-center mt-[49px]'>
           <Fic text1 ='Free Plan' text2='$0' text3='/ monthly' text4='Access to editing all blocks' text5='Editing blocks together' text6='Access to all premium icons' text7='A dedicated domain' />
           <Fic text1 ='Premium Plan' text2='$599' text3='/ year' text4='Access to editing all blocks' text5='Editing blocks together' text6='Access to all premium icons' text7='A dedicated domain' />
           <Fic text1 ='Business Plan' text2='$999' text3='/ year' text4='Access to editing all blocks' text5='Editing blocks together' text6='Access to all premium icons' text7='A dedicated domain' />
           </div>
        </div>
      </div>
    </>
  )
}

export default Price
