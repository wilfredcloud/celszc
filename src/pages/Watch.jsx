import React from 'react'
import { Comment, Video } from "../components"

const Watch = () => {
  return (
    <div className=" bg-slate-100 py-2">
        <div className="container mx-auto flex flex-col lg:flex-row justify-start">
           <div className="w-full lg:w-4/6">
           <Video/>

           <div className="px-4 py-2">
              <h1 className=" text-2xl font-medium">First Service Sunday Service</h1>
           </div>
           </div>

           <div className="w-full lg:w-2/6">
            <Comment/>
           </div>
        </div>
    </div>
  )
}

export default Watch