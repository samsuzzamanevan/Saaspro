import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import List2 from '../components/List2';
import Heading5 from '../components/Heading5';



function Footer() {
  return (
    <>
      <div className='bg-[#112F42] pt-[97px] pb-[74px]'> 
        <div className='w-[1170px] mx-auto'>
            <div className='flex'>
                <div className='me-[28px]'>
                    <img src="src/assets/logo.png" alt="" />
                    <p className='font-[roboto] font-regular text-base text-[#ffffff] w-[361px] mt-[26px] mb-[33px]'>Orem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst augue amet, luctus quis gravida nulla netus ut platea. </p>
                    <div>
                    <FaFacebookF className='inline-block text-[#ffffff]' />
                    <FaTwitter className='inline-block text-[#ffffff] mx-[23px]' />
                    <FaInstagram className='inline-block text-[#ffffff]' />
                    </div>
                </div>
                <div className='me-[112px]'>
                    <Heading5 textcontent='Company'/>
                    <ul>
                        <List2 text='About us'/>
                        <List2 text='Services'/>
                        <List2 text='Blog'/>
                    </ul>
                </div>
                <div className='me-[102px]'>
                    <Heading5 textcontent='More Links'/>
                    <ul>
                        <List2 text ='Blog Details'/>
                        <List2 text ='Service Details'/>
                        <List2 text ='Contact'/>
                    </ul>
                </div>
                <div>
                    <Heading5 textcontent='Contact Details' />
                    <ul>
                        <List2 text='Amsterdam Netherlands' />
                        <List2 text='+1 62 19 22 705' />
                        <List2 text='7 Days - 8am - 10pm' />
                        <List2 text='info@stdev.com' />
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
