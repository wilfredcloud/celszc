import React from 'react'
import rightQuote from '../assets/right-quote.png'
import leftQuote from '../assets/left-quote.png'
import { salvationPrayer } from '../utils/data'

const Salvation = () => {
  return (
    <div className=" my-20 py-20 bg-slate-200">
      <div className="container mx-auto px-4 ">
        <h1
          style={{ fontFamily: "Merriweather, serif" }}
          className="text-center text-4xl lg:text-5xl font-bold text-blue-800 px-4 ">
          Not Born Again?
        </h1>
        <div className=" text-center max-w-3xl mx-auto">

          <p className="text-lg md:text-xl mt-4 " >Say these words:</p>
          <p className=" my-5 text-lg md:text-xl leading-8 md:leading-9  mx-auto font-medium">
            <img src={leftQuote} alt="Left Quotation Mark" className=" inline mr-3" />
            {salvationPrayer}
            <img src={rightQuote} alt="Right Quotation Mark" className="ml-3 inline" /></p>

          <h3 className=" italic text-lg my-4 font-semibold   text-amber-500">Congratulations!</h3>

          <p className=" italic text-lg  ">You are now a child of God. 
          To receive more information on how you will grow as a Christain <br />
            please fill out your details:</p>
        </div>


        <div className="w-full sm:w-96 mx-auto my-4">
          <input type="email" class="form-input w-full px-4 py-3 rounded-lg
         bg-transparent border border-gray-400"
            placeholder="Fullname" />
          <input type="email" class="form-input w-full px-4 py-3 rounded-lg
         bg-transparent border border-gray-400 my-4"
            placeholder="Email" />
          <input type="email" class="form-input w-full px-4 py-3 rounded-lg
         bg-transparent border border-gray-400"
            placeholder="Phone number" />

          <button className="mt-4 rounded-md bg-amber-400 w-full
                  p-2.5 text-base font-semibold leading-7
                   text-white shadow-sm hover:bg-amber-300 
                   focus-visible:outline focus-visible:outline-2 
                   focus-visible:outline-offset-2 focus-visible:outline-amber-400 ">SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default Salvation