import React from 'react'
import CenterHeading1 from '../components/centerHeading1'
import Tc from '../components/tc'

function Eim() {
    return (
        <>
            <div className='pt-[112px] pb-[120px]'>
                <div className='w-[1170px] mx-auto'>
                    <CenterHeading1 text='Industries in focus' />
                    <div className='flex mt-[57px] gap-x-[24px] gap-y-[30px] flex-wrap justify-center'>
                        <Tc text='FinTech' text2="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." text3='See More' src='src/assets/eim1.png' />
                        <Tc text='Telecom' text2="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." text3='See More' src='src/assets/eim2.png' />
                        <Tc text='Retail' text2="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." text3='See More' src='src/assets/eim3.png' />
                        <Tc text='Transportation' text2="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." text3='See More' src='src/assets/eim4.png' />
                        <Tc text='eLearning' text2="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." text3='See More' src='src/assets/eim5.png' />
                        <Tc text='Artificial Intelligence' text2="Psum dolor sit amet, consectetur adipiscing elit. Nisi, maecenas orci sit pellentesque eget." text3='See More' src='src/assets/eim6.png' />
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Eim
