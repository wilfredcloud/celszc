import React, { useState } from 'react';
import { BiMessageSquareDots } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { ChatMessage } from './';
const Comment = () => {
  const [chatText, setChatText] = useState('');
  const [chats, setChats] = useState([]);
  const handleSendChat = async () => {
    const newChat = {
      name: 'Wilfred',
      message: chatText,
      id: crypto.randomUUID,
    };

    setChats((prevChat) => [...prevChat, newChat]);

    setChatText('');
  };
  return (
    <div className="border rounded-xl comment-section flex flex-col justify-between">
      <div
        className=" bg-white w-full h-12 px-4 flex flex-row items-center justify-start space-x-2 text-lg
      font-medium text-gray-700 border-b"
      >
        <BiMessageSquareDots size={30} /> <span>Live Chats</span>
      </div>
      {/* body */}
      <div className=" flex-1 px-2 mt-1">
        {chats.map((chat) => (
          <ChatMessage chat={chat} key={chat.id} />
        ))}
      </div>
      {/* chat input */}
      <div className=" bg-white  flex flex-row justify-between items-center border-t pr-2">
        <input
          type="text"
          value={chatText}
          onChange={(e) => setChatText(e.target.value)}
          className="border-0 flex-1 focus:outline-none placeholder:italic px-2 py-3"
          placeholder="Chat here"
        />
        <FiSend
          size={28}
          className={`text-blue-500 hover:text-blue-600 cursor-pointer
          ${chatText.trim().length == 0 && 'hidden'}`}
          onClick={handleSendChat}
        />
      </div>
    </div>
  );
};

export default Comment;
