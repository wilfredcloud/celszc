import React from 'react';
import { Avatar } from 'antd';

const ChatMessage = ({ user, message }) => {
  return (
    <div>
      <div className=" bg-slate-100 p-2 rounded-lg rounded-bl-none mb-2">
        <p className=" font-semibold">Wilfred</p>
        <p className=" text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          inventore.
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
