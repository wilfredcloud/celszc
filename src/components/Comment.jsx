import React from 'react';
import { BiMessageSquareDots } from 'react-icons/bi';

const Comment = () => {
  return (
    <div className="border rounded-xl comment-section flex flex-col justify-between">
      <div
        className=" bg-white w-full h-12 px-4 flex flex-row items-center justify-start space-x-2 text-lg
      font-medium text-gray-700 border-b"
      >
        <BiMessageSquareDots size={30} /> <span>Live Chats</span>
      </div>
      <div className=" flex-1 px-2"> chat body</div>
      <div className=" bg-white h-12">inputs</div>
    </div>
  );
};

export default Comment;
