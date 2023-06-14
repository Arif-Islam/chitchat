import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { BiArrowBack } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const SearchComponent = ({ setSearchClicked }) => {
  
  return (
    <div className="w-11/12 mx-auto">
      <div
        onClick={() => setSearchClicked(false)}
        className="flex items-center justify-center bg-black w-[88px] text-white p-1 mb-6 rounded-xl hover:cursor-pointer hover:bg-gray-900"
      >
        <BiArrowBack className="mr-2 -ml-1"></BiArrowBack>
        <p>Back</p>
      </div>
      <Scrollbars style={{ width: "100%", height: "650px" }}>
        <div className="flex items-center space-x-4 py-1 mb-4  px-1">
          <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
          <div className="text-white">
            <p className="mb-1">John Doe</p>
            <p className="text-sm font-light">Hey man! don't loose your cool</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-1 mb-4  px-1">
          <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
          <div className="text-white">
            <p className="mb-1">John Doe</p>
            <p className="text-sm font-light">Hey man! don't loose your cool</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-1 mb-4  px-1">
          <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
          <div className="text-white">
            <p className="mb-1">John Doe</p>
            <p className="text-sm font-light">Hey man! don't loose your cool</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-1 mb-4  px-1">
          <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
          <div className="text-white">
            <p className="mb-1">John Doe</p>
            <p className="text-sm font-light">Hey man! don't loose your cool</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 py-1 mb-4  px-1">
          <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
          <div className="text-white">
            <p className="mb-1">John Doe</p>
            <p className="text-sm font-light">Hey man! don't loose your cool</p>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default SearchComponent;
