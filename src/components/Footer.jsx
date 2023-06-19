import React from 'react'
import logo from "../assets/Asset 1 1.svg";
import fb from '../assets/001-facebook.svg';
import inst from '../assets/004-instagram.svg';
import tw from '../assets/003-twitter.svg';
const Footer = () => {
  return (
    <div className='h-[551px] bg-[#0A0F14] flex justify-center'>
<div className='text-center'>
<img src={logo} alt="" className='mt-[73px] ml-[390px]' />
<p className='text-[#787878] w-[500px] mt-[38px] ml-[220px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p>
<div className='flex items-center space-x-20 text-lg font-bold text-white mt-[42px]'>
  <h1>Website development</h1>
  <h1>Branding</h1>
  <h1>UI/UX design</h1>
  <h1>Software</h1>
  <h1>Digital marketing</h1>
</div>
<div className='flex items-center justify-center space-x-10 mt-[72px] cursor-pointer'>
               <img src={fb} alt="" />
               <img src={tw} alt="" />
               <img src={inst} alt="" />

</div>
<p className='text-[#787878] mt-[62px]'>Copyright © 2021. Raven Digital. All rights reserved.</p>
</div>
    </div>
  )
}

export default Footer