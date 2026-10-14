import React from 'react'
import LeftSidedHeading1 from '../components/leftSided-Heading1'
import LeftSidedPeragraph from '../components/leftSided-Peragraph'
import Button from '../components/button'

function Au() {
  return (
    <>
      <div className='pb-[70px] pt-[30px]'>
        <div className='w-[1170px] mx-auto'>
            <div className='flex gap-x-[43px]'> 
                <div>
                    <img src="src/assets/Au.png" alt="" />
                </div>
                <div>
                    <LeftSidedHeading1 textcontent= 'Don’t just engage, make it engaging.' />
                    <LeftSidedPeragraph text= 'Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions.' />
                    <p className='font-[roboto] text-base font-regular w-[533px] text-[#495E6C] leading-[27px] mb-[44px]'>Psum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra purus imperdiet a. Ut nisl est at ultricies neque ornare tellus tellus enim.</p>
                    <Button textcontent= 'Read More'/>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Au
