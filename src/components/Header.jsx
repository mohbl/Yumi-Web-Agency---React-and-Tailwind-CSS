import React from "react";
import logo from "../assets/Asset 1 1.svg";
import serachI from "../assets/search-2-line.svg";
import counter from "../assets/Group 1 (1).svg";
import disk from "../assets/cherrydeck-A44EW3n2PgM-unsplash 1.svg"
const Header = () => {
  return (
    <div className="flex ">
      <div className=" w-[60px] border-r-[0.1px]">
        <nav className="flex flex-col mt-[374px] space-y-12 ">
          <a href="#" className="p-4 text-white -rotate-90">
            linkdin
          </a>
          <a href="#" className="p-4 text-white -rotate-90">
            facebook
          </a>
          <a href="#" className="p-4 text-white -rotate-90">
            instagram
          </a>
        </nav>
      </div>
      <div className="mt-[47px] ml-[60px]">
        <div className="flex items-center">
          <img src={logo} alt="" />
          <nav className=" flex text-white space-x-[55px] ml-[200px]  ">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Portfolio
            </a>
            <a href="#" className="hover:underline">
              Testimonials
            </a>
            <a href="#" className="hover:underline">
              News
            </a>
            <a href="#" className="hover:underline">
              Contacts
            </a>
            <a href="#" className="hover:underline">
              Elements
            </a>
          </nav>
          <img src={serachI} alt="" className="ml-[69px]" />
        </div>

        <div className="flex ">
            <div className="w-[686px] mt-[250px]">
  <h1 className="mb-3 text-6xl font-bold text-white">WE ARE</h1>
  <h1 className="text-6xl font-bold text-white ">DIGITAL AGENCY</h1>
  <p className="mt-5 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id fringilla turpis tempor enim. Vel tristique suspendisse eget sodales egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id bibendum velit cras.   </p>
  <button className="w-[142px] h-[45px] rounded-3xl bg-[#003ADB] shadow-sm shadow-blue-900 text-white mt-12 hover:opacity-80">Learn more</button>
  <img src={counter} alt="" className="mt-10" />
            </div>
            <div>
            <img src={disk} alt="" className="w-[900px] h-[620px] mt-[150px] pl-8 opacity-75 " />

            </div>

        </div>
      </div>
    </div>
  );
};

export default Header;