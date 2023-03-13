import React from 'react';
import { Avatar } from 'antd';

const ChatMessage = ({ chat }) => {
  return (
    <div>
      <div className=" bg-slate-100 p-2 rounded-lg rounded-bl-none mb-2">
        <p className=" font-semibold">{chat.name}</p>
        <p className=" text-md">{chat.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
