import React from 'react'
import CenterHeading1 from '../components/centerHeading1'
import Fc from '../components/Fc'

function Service() {
  return (
    <>
      <div className='pt-[113px] pb-[140px] bg-[#F3F3F3]'>
        <div className='w-[1170px] mx-auto'>
            <CenterHeading1 text='The Product we work with.'/>
            <div className='flex gap-x-[30px] justify-center'>
                <Fc src='src/assets/service1.png' text='Consulting' text2= 'Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.' text3='See More' />
                <Fc src='src/assets/service1.png' text='Security' text2= 'Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.' text3='See More' />
                <Fc src='src/assets/service1.png' text='Management & support' text2= 'Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget.' text3='See More' />
            </div>
            <div className='w-[10px] h-[10px] rounded bg-[#2C83BB] mx-auto mt-[47px]'></div>
        </div>
      </div>
    </>
  )
}

export default Service
