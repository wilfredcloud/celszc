import React from 'react';
import { BiMessageSquareDots } from 'react-icons/bi';
import { RiSendPlane2Fill } from 'react-icons/ri';
const Comment = () => {
  return (
    <div className="border rounded-xl comment-section flex flex-col justify-between">
      <div
        className=" bg-white w-full h-12 px-4 flex flex-row items-center justify-start space-x-2 text-lg
      font-medium text-gray-700 border-b"
      >
        <BiMessageSquareDots size={30} /> <span>Live Chats</span>
      </div>
      <div className=" flex-1 px-2"></div>
      <div className=" bg-white  flex flex-row justify-between items-center border-t">
        <input
          type="text"
          className="border-0 flex-1 focus:outline-none placeholder:italic px-2 py-3"
          placeholder="Chat here"
        />
        <button className=" text-blue-800 pr-1">
          {<RiSendPlane2Fill size={32} />}
        </button>
      </div>
    </div>
  );
};

export default Comment;
