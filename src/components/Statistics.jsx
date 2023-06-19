import React from 'react'
import she from '../assets/plsF6obTgms.svg'
import bar from '../assets/Group 12.svg'

const Statistics = () => {
  return (
    <div className='mb-[160px] mt-[113px]'>
        <div className='h-[347px] bg-[#2B61F7] flex items-center justify-center'>
 <div className='w-[240px] h-[239px] border-r border-[#ABC4E3] text-center '>
    <h1 className='text-3xl font-bold text-white mt-14'>9854</h1>
    <p className='text-[#8FC2FF] text-lg'>PROJECTS <br /> COMPLETED</p>
 </div>
 <div className='w-[240px] h-[239px] border-r border-[#ABC4E3] text-center '>
    <h1 className='text-3xl font-bold text-white mt-14'>840</h1>
    <p className='text-[#8FC2FF] text-lg'>CLIENTS</p>
 </div>
 <div className='w-[240px] h-[239px] border-r border-[#ABC4E3] text-center '>
    <h1 className='text-3xl font-bold text-white mt-14'>321</h1>
    <p className='text-[#8FC2FF] text-lg'>ACTIVE <br />CLIENTS</p>
 </div>
 <div className='w-[240px] h-[239px] border-r-[0.2px] border-[#ABC4E3] text-center '>
    <h1 className='text-3xl font-bold text-white mt-14'>5410</h1>
    <p className='text-[#8FC2FF] text-lg'>CUPS <br /> OF COFEE</p>
 </div>
  <div className='w-[240px] h-[239px]  text-center '>
    <h1 className='text-3xl font-bold text-white mt-14'>9854</h1>
    <p className='text-[#8FC2FF] text-lg'>PROJECTS <br /> COMPLETED</p>
 </div>
        </div>
        <div className='flex px-[170px] text'>
            <img src={she} alt="" className='mt-[80px]'/>
            <div className='pl-[60px] mt-[120px] '>
                <h1 className='text-3xl font-bold text-white'>Testimonials</h1>
                <h2 className='font-semibold text-white mt-[35px]'>Jane Doe</h2>
                <p className='text-[#727272] font-semibold mt-2'>Company / CEO</p>
                <p className=' text-white w-[460px] mt-4 font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras. </p>
                <p className=' text-white w-[460px] mt-6 font-thin'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. </p>
            </div>
            <div className='ml-[120px] mt-[140px]'>
                <img src={bar} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Statistics