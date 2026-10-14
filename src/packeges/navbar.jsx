import React from 'react'
import '../index.css'
import List from '../components/flex-list'
import Button from '../components/button'


function Navbar() {
  return (
    <>
     <div className=' bg-[#0d554c] py-[17px]'>
     <div className='w-[1170px] mx-auto'>
            <div className='flex items-center'>
                <img src="src/assets/logo.png" alt="" />
                <ul className='flex  gap-x-[30px] ms-[333px]'>
                <List text='Home' type='true' />
                <List text='Pages' type='true' />
                <List text='About Us'/>
                <List text='Services'/>
                <List text='Blog'/>
                <List text='Contact'/>
                </ul>
                <Button textcontent="Let's talk" type='true'/>
            </div>
      </div>
     </div>
    </>
  )
}

export default Navbar
