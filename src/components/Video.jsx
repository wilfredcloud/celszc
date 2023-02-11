import React from 'react'
import ReactPlayer from "react-player"

const Video = () => {
  return (
    <div className=" mx-4 bg-slate-900 flex justify-center">
      <ReactPlayer url="https://www.youtube.com/watch?v=ge-PI-eQcSs" className=" w-full react-player" controls/>
    </div>
  )
}

export default Video