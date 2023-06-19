import React from 'react'
import shpe from '../assets/Group 27.svg'
import shpe1 from '../assets/Group 25.svg'
import shpe2 from '../assets/Group 25 (1).svg'
import mango from '../assets/mango.svg'
import micro from '../assets/microsoft.svg'
import nike from '../assets/nike.svg'
import amazon from '../assets/amazon.svg'


const Blog = () => {
  return (
    <div>
       <div className='px-[170px] mt-28'>
            <h1 className="text-4xl text-white font-bold text-center">Blog</h1>

<div className="flex justify-center space-x-5 mt-24 text-white">
        <div className="relative w-[461px] h-[714px] overflow-hidden rounded-lg shadow-lg cursor-pointer" >
          <img src={shpe} alt='' className="" />
          <h1 className='absolute top-[355px] left-[50px] text-xl font-semibold'>Techno</h1>
          <div className='absolute top-[415px] left-[40px]'>
            <div className='flex space-x-[240px]'>
          <p className='  text-[#727272] font-semibold'>07/04/2021</p>
          <p className=' text-[#727272] font-semibold'>1502</p>
            </div>
         
          <h1 className='text-2xl font-bold mt-4'>Tik tok Banned in India</h1>
          <p className='mt-2 w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit</p>
          </div>
         
     
          
        </div>

        <div className="relative w-[461px] h-[714px] overflow-hidden rounded-lg shadow-lg cursor-pointer" >
          <img src={shpe1} alt="" className=" " />
          <h1 className='absolute top-[355px] left-[50px] text-xl font-semibold'>Techno</h1>
          <div className='absolute top-[415px] left-[40px]'>
            <div className='flex space-x-[240px]'>
          <p className='  text-[#727272] font-semibold'>07/04/2021</p>
          <p className=' text-[#727272] font-semibold'>1502</p>
            </div>
         
          <h1 className='text-2xl font-bold mt-4'>Lorem ipsum</h1>
          <p className='mt-2 w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit</p>
          </div>
          
        </div>

        <div className="relative w-[461px] h-[714px] overflow-hidden rounded-lg shadow-lg cursor-pointer" >
          <img src={shpe2} alt="" className="" />
          <h1 className='absolute top-[355px] left-[50px] text-xl font-semibold'>Techno</h1>
          <div className='absolute top-[415px] left-[40px]'>
            <div className='flex space-x-[240px]'>
          <p className='  text-[#727272] font-semibold'>07/04/2021</p>
          <p className=' text-[#727272] font-semibold'>1502</p>
            </div>
         
          <h1 className='text-2xl font-bold mt-4'>Lorem ipsum</h1>
          <p className='mt-2 w-[350px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit</p>
          </div>
          
        </div>

       
      </div>
    </div>
    <div className='bg-[#0A0F14] h-[313px] mt-[120px]'>
<h1 className='text-white text-4xl font-bold pl-[214px] pt-[64px]'>Clients</h1>
<div className='flex ml-[214px] mt-[25px] space-x-16'>
<img src={mango} alt="" />
<img src={micro} alt="" />
<img src={nike} alt="" />
<img src={amazon} alt="" />
<img src={mango} alt="" />
<img src={micro} alt="" />
<img src={nike} alt="" />



</div>
    </div>
    </div>
   
  )
}

export default Blog