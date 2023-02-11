import React from 'react'
import { Comment, Video } from "../components"

const Watch = () => {
  return (
    <div>
        <div className="container flex flex-col lg:flex-row justify-start">
           <div className="w-full lg:w-4/6">
           <Video/>
           </div>

           <div className="w-full lg:w-2/6">
            <Comment/>
           </div>
            <Comment/>
        </div>
    </div>
  )
}

export default Watch