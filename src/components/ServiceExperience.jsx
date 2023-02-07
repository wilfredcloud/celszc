import React from 'react'
import watchExperienceServiceBanner from '../assets/wex-pastor.png'
import {AiOutlinePlayCircle } from 'react-icons/ai'

const ServiceExperience = () => (
    <div className="h-[506px] my-20 "
     style={{backgroundImage:`linear-gradient(
        to right,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.7)
      ),
      url(${watchExperienceServiceBanner})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
      <div className=" container mx-auto px-4 py-8 flex flex-col md:flex-row space-y-10 text-white 
      justify-center md:justify-start items-center h-full">
      <div className=" md:flex-1 w-full md:w-3/5">
        <h2 style={{fontFamily:'Merriweather, serif'}} className="text-4xl md:text-5xl font-bold">Watch and experience our services</h2>
        <p className="text-lg md:text-xl mt-4 leading-8 md:leading-10">Join us every sundays 8am & 10am and wednesdays 6:30pm</p>
      </div>
      <div className="w-full md:w-2/5">
        <AiOutlinePlayCircle className=" w-14 h-14 hover:w-16 hover:h-16 md:w-24 md:h-24  cursor-pointer"/>
      </div>
      </div>
    
    </div>
  )

export default ServiceExperience