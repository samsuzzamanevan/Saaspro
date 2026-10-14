import React from 'react'
import LeftSidedHeading1 from '../components/leftSided-Heading1'
import LeftSidedPeragraph from '../components/leftSided-Peragraph'
import Sc from '../components/Sc'

function Review() {
    return (
        <>
            <div className='py-[130px] bg-[#F3F3F3]'>
                <div className='w-[1170px] mx-auto'>
                    <div className='flex gap-x-[27px]'>
                    <div>
                        <img src="src/assets/review3.png" alt="" />
                        <LeftSidedHeading1 textcontent='What our clients say about us' num='0' />
                        <LeftSidedPeragraph text='Nunc tortor vel tincidunt id massa congue. Varius risus lorem vestibulum velit.' num='0' />
                    </div>
                    <div>
                        <div className='flex gap-x-[30px]'>
                            <Sc text1='Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi.' text2='Davis Lubin' text3='CEO of Fashionon' src='src/assets/review2.png' />
                            <Sc text1='Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi.' text2='Leslie Alexander' text3='CEO of Fashionon' src='src/assets/review1.png' />
                        </div>
                        <div className='flex gap-x-[10px] mt-[30px] justify-center'>
                            <div className='h-[10px] w-[10px] bg-[#2C83BB] rounded-full'></div>
                            <div className='h-[10px] w-[10px] bg-[#CCD5DB] rounded-full'></div>
                        </div>

                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
