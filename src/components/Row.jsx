import React from 'react'
import { OurMinistryRowData } from "../utils/data"

const Row = () => {
  return (
    <div className=" container mx-auto grid grid-cols-2 gap-4 my-20 ">
        <div>
            <hr className=" w-40 mb-6 border-4 border-amber-200"/>
            <h1 style={{fontFamily: OurMinistryRowData.title.fontStyle }} className="text-4xl font-[900] text-blue-800 ">{OurMinistryRowData.title.content}</h1>
            <p className=" text-xl mt-4 leading-10">{OurMinistryRowData.text}</p>
            <button  className="rounded-md bg-amber-400 
                  p-3.5 text-base font-semibold leading-7
                   text-white shadow-sm hover:bg-amber-300 
                   focus-visible:outline focus-visible:outline-2 
                   focus-visible:outline-offset-2 focus-visible:outline-amber-400 
                   uppercase mt-3">Statment of Faith</button>
        </div>
        <div>
            <img src={OurMinistryRowData.image} alt="Worshipper" />
        </div>
    </div>
  )
}

export default Row