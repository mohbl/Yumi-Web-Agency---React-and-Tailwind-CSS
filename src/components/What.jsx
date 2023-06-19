import React from 'react'
import shape from '../assets/Group 23.svg'
import shape2 from '../assets/Group 25 (2).svg'
import shape3 from '../assets/Group 26.svg'
import shape4 from '../assets/Group 25 (8).svg'
import shape5 from '../assets/Group 26 (1).svg'



const What = () => {
  return (
    <div className='px-[170px] mt-[120px]'>
        <h1 className='text-4xl font-bold text-center text-white mb-[78px]'>WHAT WE DO</h1>

    <div className="grid grid-cols-4 gap-4 ">
      {/* First row */}
      <div className="col-span-1 h-[305px] w-[310px] bg-[#1B2837] relative text-white rounded-md mt-2 ">
      <h1 className='text-xl font-extrabold mt-8 ml-[24px]'>APP DEVELOPMENT</h1>
      <p className='mt-[36px] ml-[24px] mr-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h1 className='underline mt-[36px] ml-[24px] mr-2 '>contact us</h1>
      <img src={shape} alt="" className='absolute bottom-[-38px] left-[145px] '/>
      </div>
      
      <div className="col-span-1 h-[320px] w-[310px]  relative text-white  "> 
      <img src={shape2} alt="" className='h-[320px] w-[310px]'/>
      <h1 className='absolute text-xl font-extrabold top-10 left-6'>WEBSITE DEVELOPMENT</h1>
      <p className='absolute top-[105px] left-6 w-[285px] '>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h1 className='absolute underline top-52 left-6 '>contact us</h1>
      </div>
      
      <div className="col-span-1 h-[305px] w-[310px] bg-[#1B2837] relative text-white rounded-md mt-2 ">
      <h1 className='text-xl font-extrabold mt-8 ml-[24px]'>UI/UX DESIGNING</h1>
      <p className='mt-[36px] ml-[24px] mr-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h1 className='underline mt-[36px] ml-[24px] mr-2 '>contact us</h1>
      <img src={shape3} alt="" className='absolute bottom-[-38px] left-[145px] '/>
      </div>
      
      <div className="col-span-1 h-[305px] w-[310px] bg-[#1B2837] relative text-white rounded-md mt-2 ">
      <h1 className='text-xl font-extrabold mt-8 ml-[24px]'>DIGITAL MARKETING</h1>
      <p className='mt-[36px] ml-[24px] mr-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h1 className='underline mt-[36px] ml-[24px] mr-2 '>contact us</h1>
      <img src={shape4} alt="" className='absolute bottom-[-38px] left-[145px] '/>
      </div>
      {/* Second row */}
      <div className="col-span-1 h-[305px] w-[310px] bg-[#1B2837] relative text-white rounded-md mt-2 ">
      <h1 className='text-xl font-extrabold mt-8 ml-[24px]'>SEO & CONTENT WRITING</h1>
      <p className='mt-[36px] ml-[24px] mr-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h1 className='underline mt-[36px] ml-[24px] mr-2 '>contact us</h1>
      <img src={shape5} alt="" className='absolute bottom-[-38px] left-[145px] '/>
      </div>
      
      <div className="col-span-1 h-[305px] w-[310px] bg-[#1B2837] relative text-white rounded-md mt-2 ">
      <h1 className='text-xl font-extrabold mt-8 ml-[24px]'>GRAPHIC DESIGNING</h1>
      <p className='mt-[36px] ml-[24px] mr-2'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <h1 className='underline mt-[36px] ml-[24px] mr-2 '>contact us</h1>
      <img src={shape5} alt="" className='absolute bottom-[-38px] left-[145px] '/>
      </div>      
      <div className="col-span-2 h-[320px] w-[640px]   ">
        <h1 className='mt-10 text-3xl font-bold text-white ml-9 '>SOLUTIONS FOR <br />YOUR BUSSINESS</h1>
        <p className='w-[300px] text-white mt-[14px] ml-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button className="w-[142px] ml-9 h-[45px] rounded-3xl bg-[#003ADB] shadow-sm shadow-blue-900 text-white mt-12 hover:opacity-80">Learn more</button>
      </div>
    </div>
    </div>
  )
}

export default What