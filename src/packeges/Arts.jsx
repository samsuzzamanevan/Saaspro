import React from 'react'
import CenterHeading1 from '../components/centerHeading1'
import Sec from '../components/Sec'

function Arts() {
    return (
        <>
            <div className='bg-[#F3F3F3] pt-[113px] pb-[120px]'>
                <div className='w-[1170px] mx-auto'>
                    <CenterHeading1 text='Recent News & Articles' />
                    <div className='flex gap-x-[24px] justify-center'>
                        <Sec text1='Where Should I Buy Next?' text2='Carter Rosser' text3='24/08/2021' text4='From romantic getaways to adventurous
                            hikes, find your next...' text5='See More' src='src/assets/com1-test.png' src2='src/assets/Arts1.png' />
                        <Sec text1='Malesuada Fermentum Tortor' text2='Carter Rosser' text3='24/08/2021' text4='From romantic getaways to adventurous
                            hikes, find your next...' text5='See More' src='src/assets/com2-test.png' src2='src/assets/Arts2.png'/>
                        <Sec text1='Magna Malesuada' text2='Carter Rosser' text3='24/08/2021' text4='From romantic getaways to adventurous
                            hikes, find your next...' text5='See More' src='src/assets/com3-test.png'  src2='src/assets/Arts3.png'/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Arts
