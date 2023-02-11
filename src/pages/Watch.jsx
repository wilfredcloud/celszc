import React from 'react'
import { Comment, Video } from "../components"

const Watch = () => {
  return (
    <div>
        <div className="container mx-auto flex flex-col lg:flex-row justify-start">
           <div className="w-full lg:w-4/6">
           <Video/>
           </div>

           <div className="w-full lg:w-2/6">
            <Comment/>
           </div>
        </div>
    </div>
  )
}

export default Watch