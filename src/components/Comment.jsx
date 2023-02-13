import React from 'react'

const Comment = () => {
  return (
    <div className="border comment-section flex flex-col justify-between">
      <div className=" bg-white w-full h-12 px-4 flex flex-col justify-center text-lg
      font-medium text-gray-700">Comments</div>
      <div className=" bg-slate-400 flex-1"> chat body</div>
      <div className=" bg-white h-12">
          inputs
      </div>
    </div>
  )
}

export default Comment