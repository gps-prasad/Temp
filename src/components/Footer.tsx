import React from 'react';
import { CiGlobe, CiBellOn, CiUser } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className='flex flex-row justify-between px-3 py-4 shadow fixed bottom-0 left-0 w-full h-14 z-50 bg-gray-100'>
      <div className='flex flex-row space-x-2 items-center'>
        <div className='text-mdPrimary'><CiGlobe size={30}/></div>
        <h1 className='font-bold text-mdPrimary'>Connect-UI</h1>
      </div>
      <div className='flex flex-row space-x-2 items-center'>
        <h1 className='text-sm text-mdPrimary'>www.connectui.com</h1>
      </div>
      <div className='flex space-x-4 text-mdPrimary'>
        <div><FaFacebook size={25}/></div>
        <div><FaInstagram size={25}/></div>
        <div><FaLinkedin size={25}/></div>
      </div>
    </div>
  )
}

export default Footer
