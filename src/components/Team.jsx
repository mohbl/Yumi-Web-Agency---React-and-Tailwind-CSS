import React, { useState } from 'react';
import person1 from '../assets/jns8BPueAgU.svg';
import person2 from '../assets/Mark_Zuckerberg_at_the_37th_G8_Summit_in_Deauville_018_v1.jpg';
import person3 from '../assets/eyFbjKWlR2g.svg';
import person4 from '../assets/bsbosa.svg';
import fb from '../assets/001-facebook.svg';
import inst from '../assets/004-instagram.svg';
import tw from '../assets/003-twitter.svg';




const Team = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  return (
    <div className="px-[170px]">
      <h1 className="text-4xl text-white font-bold">Our team</h1>
      <div className="flex justify-center space-x-5 mt-24 ">
        <div
          className="relative w-[340px] h-[510px] overflow-hidden  cursor-pointer"
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <img src={person1} alt="John Doe" className="w-full h-auto" />

          {hoveredCard === 0 && (
            <div className="absolute inset-0 h-auto  ">
              <div className="  h-[480px]  bg-[#2B61F7] text-center text-white">
                <h2 className="text-2xl font-bold pt-14">John Doe</h2>
                <p className='mt-4 font-semibold text-lg'>Company / CEO</p>
                <p className='mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p>
                <div className='flex justify-center items-center mt-28 space-x-10'>
               <img src={fb} alt="" />
               <img src={tw} alt="" />
               <img src={inst} alt="" />

                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative w-[340px] h-[510px] overflow-hidden  cursor-pointer"
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <img src={person2} alt="Jane Smith" className="w-full h-auto " />

          {hoveredCard === 1 && (
            <div className="absolute inset-0 h-auto ">
              <div className="  h-[480px]  bg-[#2B61F7] text-center text-white">
                <h2 className="text-2xl font-bold pt-14">John Doe</h2>
                <p className='mt-4 font-semibold text-lg'>Company / CEO</p>
                <p className='mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p>
                <div className='flex justify-center items-center mt-28 space-x-10'>
               <img src={fb} alt="" />
               <img src={tw} alt="" />
               <img src={inst} alt="" />

                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative w-[340px] h-[510px] overflow-hidden  cursor-pointer"
          onMouseEnter={() => handleCardHover(2)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <img src={person3} alt="Another Person" className="w-full h-auto" />

          {hoveredCard === 2 && (
            <div className="absolute inset-0 h-auto ">
              <div className=" h-[480px]  bg-[#2B61F7] text-center text-white">
                <h2 className="text-2xl font-bold pt-14">John Doe</h2>
                <p className='mt-4 font-semibold text-lg'>Company / CEO</p>
                <p className='mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p>
                <div className='flex justify-center items-center mt-28 space-x-10'>
               <img src={fb} alt="" />
               <img src={tw} alt="" />
               <img src={inst} alt="" />

                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="relative w-[340px] h-[510px] overflow-hidden cursor-pointer"
          onMouseEnter={() => handleCardHover(3)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <img src={person4} alt="Yet Another Person" className="w-full h-auto" />

          {hoveredCard === 3 && (
            <div className="absolute inset-0 h-auto ">
              <div className=" h-[480px]  bg-[#2B61F7] text-center text-white">
                <h2 className="text-2xl font-bold pt-14">John Doe</h2>
                <p className='mt-4 font-semibold text-lg'>Company / CEO</p>
                <p className='mt-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse </p>
                <div className='flex justify-center items-center mt-28 space-x-10'>
               <img src={fb} alt="" />
               <img src={tw} alt="" />
               <img src={inst} alt="" />

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
