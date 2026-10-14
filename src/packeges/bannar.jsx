import React from 'react'
import LeftSidedSpan from '../components/leftSided-Span'
import LeftSidedHeading1 from '../components/leftSided-Heading1'
import LeftSidedPeragraph from '../components/leftSided-Peragraph'
import Button from '../components/button'
import FirstCard from '../components/firstCard'

function Bannar() {
    return (
        <>
            <div className='py-[100px] pb-[600px] bg-[#0d554c] relative z-0 before:w-[108%] before:h-[55%] before:bg-white before:absolute relative before:bottom-[-310px] before:left-[-180px] before:content-[""] overflow-hidden before:rotate-[19deg] z-0 before:z-10' >
                <div className='w-[1270px] ms-[379px]'>
                    <div className='flex'>
                        <div className='w-2/5'>
                            <LeftSidedSpan text='Business & Technologies' />
                            <LeftSidedHeading1 textcontent='We help tech companies deliver great software' type='true' />
                            <LeftSidedPeragraph text="Since 1999. For millions of users. We transform businesses with powerful and adaptable digital solutions that satisfy the needs of today and unlock the opportunities of tomorrow." type='true'/>
                            <input type="search" className='w-[320px] h-[60px] p-[15px] rounded-[8px] mt-[44px] bg-[#ffffff]' />
                            <Button textcontent = 'Request for Demo' number= '0'/>
                        </div>
                        <div className='w-3/5 ms-[62px]'>
                            <img src="src/assets/bannar.png" alt="" style={{ width: '755px' }} />
                        </div>
                    </div>
                    <FirstCard/>
                </div>
            </div>
        </>
    )
}

export default Bannar
