import React from 'react'
import HeroBanner from '../assets/hero.png'

const Hero = () => {
  return (
      <div style={{  backgroundImage: `linear-gradient(to bottom, 
      rgba(9, 51, 124, 0.7),
      rgba(9, 51, 124, 0.7),
      rgba(9, 51, 124, 0.6)), 
      url(${HeroBanner})`}}
      className=" h-[546px] text-white  ">
        <div className="flex flex-col justify-center container mx-auto h-full">

        <h1 className=" text-7xl font-extrabold leading-[90px]" style={{fontFamily: 'Merriweather, serif'}}>
          Welcome To Christ Embassy <br />
          Lagos Subzone C
        </h1>
        
        <p className=" my-6 font-medium text-lg">
          A place where we share God’s love and make plain God’s plan for all.
        </p>

      <div className="">
     <a href="#"
                  className="rounded-md bg-amber-400 
                  p-3.5 text-base font-semibold leading-7
                   text-white shadow-sm hover:bg-amber-300 
                   focus-visible:outline focus-visible:outline-2 
                   focus-visible:outline-offset-2 focus-visible:outline-amber-400 
                   "
                >
                  Live Service
                </a>
     </div>
        </div>

      </div>
  )
}


export default Hero