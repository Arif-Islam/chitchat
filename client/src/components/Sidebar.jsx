/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { Scrollbars } from "react-custom-scrollbars";

const Sidebar = ({ user }) => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedChat, setSelectedChat] = useState(true);

  return (
    <div className="md:w-1/2 lg:w-2/5 xl:w-1/4 mx-auto bg-[#20232B] h-[calc(100vh-80px)] pt-6 pb-4 border border-[#20232b] rounded-tl-3xl rounded-bl-3xl">
      <div className="flex items-center justify-between w-11/12 mx-auto mb-10">
        <p className="text-blue-600 capitalize text-[18px] pl-2">
          Welcome {user?.data?.name || user?.data?.data?.name}!
        </p>
        <div className="flex items-center">
          <div className="bg-gray-200 p-1 rounded-full mr-[14px]">
            <MdNotifications className="text-black w-6 h-6 -rotate-[9deg] hover:rotate-[9deg] transition duration-200 ease-linear hover:cursor-pointer"></MdNotifications>
          </div>
          <div className="relative">
            <img
              onMouseEnter={() => setProfileMenu(true)}
              onMouseLeave={() => setProfileMenu(false)}
              className="w-8 rounded-full hover:cursor-pointer"
              //   src={user?.data?.image || user?.data?.data?.image}
              src="https://res.cloudinary.com/dedukuyxr/image/upload/v1686518214/dkeavt4j6qtxutjgxsvi.png"
              alt=""
            />
            {profileMenu && (
              <div
                onMouseEnter={() => setProfileMenu(true)}
                onMouseLeave={() => setProfileMenu(false)}
                className="absolute top-[33px] -right-20 bg-white text-black py-2 flex flex-col items-center justify-center rounded"
              >
                <p className="w-28 h-10 flex items-center justify-center hover:border-y-[1px] hover:border-black hover:cursor-pointer">
                  My Profile
                </p>
                <div className="w-28 h-10 flex items-center justify-center hover:border-y-[1px] hover:border-black hover:cursor-pointer">
                  <p className="pr-2">Logout</p>
                  <FiLogOut className="w-4 h-4"></FiLogOut>
                </div>
              </div>
            )}
          </div>

          {/* <FiLogOut className="w-7 h-7 text-gray-200"></FiLogOut> */}
        </div>
      </div>
      <div className="w-11/12 mx-auto mb-6">
        <input
          onClick={() => setSearchClicked(true)}
          className="w-full h-10 bg-[#16171B] text-white rounded-2xl p-4 focus:outline-none"
          type="text"
          placeholder="Search users..."
        />
      </div>
      {!searchClicked && (
        <div className="w-11/12 mx-auto">
          <p className="text-xl text-blue-500 font-semibold pl-2 mb-6">
            Messages
          </p>
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
      )}
      {searchClicked && (
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
                <p className="text-sm font-light">
                  Hey man! don't loose your cool
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-1 mb-4  px-1">
              <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
              <div className="text-white">
                <p className="mb-1">John Doe</p>
                <p className="text-sm font-light">
                  Hey man! don't loose your cool
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-1 mb-4  px-1">
              <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
              <div className="text-white">
                <p className="mb-1">John Doe</p>
                <p className="text-sm font-light">
                  Hey man! don't loose your cool
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-1 mb-4  px-1">
              <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
              <div className="text-white">
                <p className="mb-1">John Doe</p>
                <p className="text-sm font-light">
                  Hey man! don't loose your cool
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-1 mb-4  px-1">
              <FaUserCircle className="w-11 h-11 text-white"></FaUserCircle>
              <div className="text-white">
                <p className="mb-1">John Doe</p>
                <p className="text-sm font-light">
                  Hey man! don't loose your cool
                </p>
              </div>
            </div>
          </Scrollbars>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
