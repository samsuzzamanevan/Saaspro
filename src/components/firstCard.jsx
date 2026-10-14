import React from 'react'
import LeftSidedSpan from './leftSided-Span'
import LeftSidedHeading2 from './leftSided-Heading2'
import SecondCard from './SecondCard'

function FirstCard() {
  return (
    <>
      <div className=' w-[1146px]  px-[50px] bg-white pt-[50px] pb-[40px] rounded-[12px] shadow-[0_7px_40px_rgba(0,0,0,0.2)] absolute z-20 bottom-[5px]'>

        <div className='flex pb-[69px] gap-x-[116px] border-b' style={{borderColor:'#676161ba'}}>
          <div className='pt-[31px]'>
            <LeftSidedSpan text='Who we are?' type={true} />
            <LeftSidedHeading2 text='More than 5,000 users around the world are already using STDEV actively' />
          </div>
          <div className='bg-[#CFDDDB] px-[35px] pt-[40px] pb-[35px] rounded-[6px]'>
            <h1 className='font-[inter] text-[50px] font-bold text-[#112F42] text-center'>4.8</h1>
            <div className='mx-auto' >
            <img src="src/assets/star.png" alt="" style={{display:'inline-block', marginLeft:'5px'}} />
            <img src="src/assets/star.png" alt="" style={{display:'inline-block', marginLeft:'5px'}} />
            <img src="src/assets/star.png" alt="" style={{display:'inline-block', marginLeft:'5px'}} />
            <img src="src/assets/star.png" alt="" style={{display:'inline-block', marginLeft:'5px'}} />
            <img src="src/assets/star.png" alt="" style={{display:'inline-block', marginLeft:'5px'}} />
            </div>
            <span className='inline-block ms-[20px] font-[roboto] font-regular text-base text-[#495E6C] mt-[10px]' >35 Reviews</span>
          </div>
        </div>
        <div className='flex gap-x-[140px] pt-[27px]'>
          <SecondCard src='src/assets/card1.png' text1='70+' text2='Professionals'/>
          <SecondCard src='src/assets/card2.png' text1='22 Years' text2='Year of experience'/>
          <SecondCard src='src/assets/card3.png' text1='$40+M' text2='Fundraised by customers'/>
         
        </div>
      </div>
    </>
  )
}

export default FirstCard
