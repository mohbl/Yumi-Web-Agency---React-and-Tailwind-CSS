    import React, { useState } from 'react';
import phone from "../assets/phone-line.svg"
import mail from "../assets/Group.svg"
import adr from "../assets/Group (2).svg"
import map from "../assets/Group 19.svg"

const ContactUs = () => {


  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };
  return (
    <div className='pl-[170px] mt-32 flex space-x-[240px] '>
<div className=" w-[500px]">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-white" htmlFor="name">
            Name
          </label>
          <input
            className="border-b border-[#536A82] focus:border-blue-500 outline-none w-full py-2 px-3 bg-[#0C1117] text-[#2E2E2E]"
            type="text"
            name="name"
            id="name"
            placeholder="Name here"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
        <label className="block mb-2 font-bold text-white" htmlFor="name">
        Last name
          </label>
          <input
            className="border-b border-[#536A82] focus:border-blue-500 outline-none w-full py-2 px-3 bg-[#0C1117] text-[#2E2E2E]"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last name here"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
        <label className="block mb-2 font-bold text-white" htmlFor="name">
        Email
          </label>
          <input
            className="border-b border-[#536A82] focus:border-blue-500 outline-none w-full py-2 px-3 bg-[#0C1117] text-[#2E2E2E]"
            type="email"
            name="email"
            id="email"
            placeholder="Example@mail.eru"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
        <label className="block mb-2 font-bold text-white" htmlFor="name">
            Message
          </label>
          <textarea
            className="border-b border-[#536A82] focus:border-blue-500 outline-none w-full py-2 px-3 bg-[#0C1117] text-[#2E2E2E]"
            name="message"
            id="message"
            placeholder=" Start typing"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="w-[177px] h-[45px] rounded-3xl bg-[#003ADB] shadow-sm shadow-blue-900 text-white mt-12 hover:opacity-80 ">Send Message</button>
      </form>
 </div>
 <div className=''>
    <div className='flex mt-3 space-x-6 text-white'>
<img src={phone} alt="" />
<h1 className='text-xl font-bold'>Mobile number</h1>
    </div>
    <div className='flex text-white space-x-[25px] ml-10 mt-5'>
<p className='text-[#B6B6B6] font-medium'>+1 252-937-3762</p>
<button type="submit" className="w-[107px] h-[28px] rounded-3xl bg-[#003ADB] shadow-sm shadow-blue-900 text-white  hover:opacity-80 ">call</button>
    </div>
    <div className='flex text-white space-x-[25px] ml-10 mt-4'>
<p className='text-[#B6B6B6] font-medium'>+1 252-937-3762</p>
<button type="submit" className="w-[107px] h-[28px] rounded-3xl bg-[#003ADB] shadow-sm shadow-blue-900 text-white  hover:opacity-80 ">call</button>
    </div>
    <div className='flex text-white space-x-6 mt-[69px]'>
<img src={mail} alt="" />
<h1 className='text-xl font-bold'>E-mail</h1>
    </div>
    <p className='text-[#B6B6B6] font-medium ml-10 mt-5'>
    sample@example.com
    </p>
    <div className='flex text-white space-x-6 mt-[67px]'>
<img src={adr} alt="" />
<h1 className='text-xl font-bold'>Adress</h1>
    </div>
    <p className='text-[#B6B6B6] font-medium ml-10 w-[270px] mt-5'>
    5 Indian Spring Dr.
 Mundelein, IL 60060
    </p>
 </div>
 <div className='pl-14 mt-[400px]'>
    <img src={map} alt="" />
 </div>
    </div>
  )
}

export default ContactUs