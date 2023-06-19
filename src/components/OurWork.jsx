import React from 'react'
import pic1 from '../assets/L0nipfx-Ry4.svg'
import pic2 from '../assets/UVfvFrp4x4E.svg'
import pic3 from '../assets/sDwhXKJijyE.svg'
import img2 from '../assets/NIo8Fd-RngE.svg'
import img1 from '../assets/WS7tgu261f0.svg'



const OurWork = () => {
  return (
    <div className='px-[170px] text-white mt-20'>
<h1 className='text-4xl font-bold'>Our works</h1>
<div className='flex  mt-20 space-x-4  '>
<img src={pic1} alt="" className='h-[340px] ' />
<img src={pic2} alt="" className=' h-[340px] '/>
<img src={pic3} alt="" className='  h-[340px] ' />
</div>
<div className='flex  mt-3 space-x-4  '>
<div className='w-[503px] pt-20 pl-36'>
    <h1 className='font-bold text-2xl tracking-wider'>not impressed?</h1>
    <p className='w-[300px] mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <button className="w-[142px] h-[45px] rounded-3xl bg-[#003ADB] shadow-sm shadow-blue-900 text-white mt-7 hover:opacity-80 ">Learn more</button>

</div>
<img src={img1} alt="" className=' h-[350px] '/>
<img src={img2} alt="" className='  h-[350px] ' />
</div>
    </div>
  )
}

export default OurWork