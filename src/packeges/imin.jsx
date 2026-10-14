import React from 'react'
import CenterHeading1 from '../components/centerHeading1'
import CenterPeragraph from '../components/centerPeragraph'

function ImIn() {
    return (
        <>
            <div className='bg-[#F3F3F3] pt-[113px] pb-[70px]'>
                <div className='w-[1170px] mx-auto'>
                    <CenterHeading1 text='All product work with several devices.' type='true' />
                    <CenterPeragraph text='A great SaaS UI/UX design can make your product addictive and uncomfortable to give up.' />
                    <div className='text-center mt-[34px]'>
                    <button><img src="src/assets/btn.png" alt="" className='bg-[#112F42] rounded-[5px] px-[10px] pt-[8px] pb-[6px]' /></button>
                    <button><img src="src/assets/btn2.png" alt="" className='bg-[#112F42] rounded-[5px] px-[10px] pt-[6px] pb-[4px] ms-[20px]' /></button>
                    </div>
                    <img src="src/assets/imin.png" alt="" className='mt-[55px] border-[0]' />
                    
                </div>
            </div>
        </>
    )
}

export default ImIn
