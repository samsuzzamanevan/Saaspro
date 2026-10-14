import React from 'react'
import LeftSidedHeading1 from '../components/leftSided-Heading1'
import { CiMail } from "react-icons/ci";
import Button from '../components/button';


function S2() {
    return (
        <>
            <div className='pt-[110px] pb-[120px]'>
                <div className='w-[1170px] mx-auto'>
                    <div className='flex gap-x-[24px]'>
                        <div>
                            <h5 className='font-[raleway] text-[14px] font-bold text-[#2C83BB] mb-[18px]'>OUR NEWSLETTER</h5>
                            <LeftSidedHeading1 textcontent='Stay up to date' />
                            <p className='font-[roboto] font-regular text-base text-[#495E6C] w-[564px] mt-[27px] mb-[58px]'>With our weekly newsletter you will stay informed about important information in the HR world, new Corona work guidelines.</p>
                            <div className='w-[381px] border px-[12px] pt-[12px] pb-[16px] border-[#2c84bb4f] rounded-[8px] inline-block me-[34px]'>
                                <label htmlFor="text"><CiMail className='inline-block text-[#2C83BB] font-semibold' /></label>

                                <input type="text" className='border-[0] w-[90%] focus:outline-none inline-block' id='text' />
                            </div>
                            <Button number='0' textcontent='Subscribe' />
                        </div>
                        <div>
                            <img src="src/assets/img2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default S2
