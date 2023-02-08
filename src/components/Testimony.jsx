import React from 'react'
import {TestimonyCard} from "./"
import {testimoniesData} from "../utils/data"

const Testimony = () => {
  return (
    <div className="container mx-auto my-20 px-4">
        <hr className="w-32 md:w-40 mb-6 border-2 md:border-4 border-3 border-amber-200 mx-auto"/>
        <h1 className="text-center text-4xl lg:text-5xl font-bold ">Testimony</h1>
        <p className="text-lg md:text-xl mt-4 text-center" >Hear what our members say</p>
        
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-14 my-16">
        {testimoniesData.map((testifier)=> (<TestimonyCard key={testifier.id} testifier={testifier} />))}
        </div>

      <div className=" text-center">
      <button type="button"
                  className="rounded-md bg-amber-400 
                  px-3.5 py-2 text-base font-semibold leading-7
                   text-white shadow-sm hover:bg-amber-300 
                   focus-visible:outline focus-visible:outline-2 
                   focus-visible:outline-offset-2 focus-visible:outline-amber-400 
                   "> SHARE YOURS
                </button>
      </div>

    </div>
  )
}

export default Testimony