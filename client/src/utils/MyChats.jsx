import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const MyChats = ({ selectedChat, setSelectedChat, setSearchClicked }) => {
  // const [selectedChat, setSelectedChat] = useState(true);

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl text-blue-500 font-semibold pl-2">Messages</p>
        <div className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 hover:cursor-pointer p-2 rounded-lg">
          <AiOutlinePlus className="mr-[6px] w-4 h-4 "></AiOutlinePlus>
          <p className="text-[15px]">New Group</p>
        </div>
      </div>
      <Scrollbars style={{ width: "100%", height: "650px" }}>
        <div className="">
          <div
            className={`flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer ${
              selectedChat ? "bg-[#1A1E23] shadow-lg shadow-blue-950" : ""
            }`}
          >
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer">
            <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
            <div className="text-white">
              <p className="mb-1 text-[15px]">John Doe</p>
              <p className="text-sm font-light -mt-[2px]">
                Hey man! don't loose your cool
              </p>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default MyChats;
