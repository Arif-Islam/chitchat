/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { MdNotifications } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Scrollbars } from "react-custom-scrollbars";
import ProfileModal from "../utils/ProfileModal";
import MyChats from "../utils/MyChats";
import SearchComponent from "../utils/SearchComponent";

const Sidebar = ({ user }) => {
  const [profileModal, setProfileModal] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [selectedChat, setSelectedChat] = useState(true);

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

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
          <div className="relative inline-block ">
            <div className="group">
              <img
                onClick={toggleDropdown}
                className="w-8 rounded-full hover:cursor-pointer"
                src={user?.data?.image || user?.data?.data?.image}
                alt=""
              />
              <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs py-2 w-24 text-center rounded-md -mt-16 ml-2">
                Your Profile
              </div>
            </div>
            {isOpen && (
              <div
                // onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
                className="absolute right-0 mt-2 py-2 bg-white border rounded shadow-md"
              >
                <ul>
                  <li className="w-32 py-2 hover:bg-gray-200 hover:cursor-pointer text-center">
                    My Profile
                  </li>
                  <li className="w-32 py-2 hover:bg-gray-200 hover:cursor-pointer text-center">
                    Logout
                  </li>
                </ul>
              </div>
            )}
            {profileModal && (
              <ProfileModal
                profileModal={profileModal}
                setProfileModal={setProfileModal}
              ></ProfileModal>
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
        <MyChats selectedChat setSelectedChat setSearchClicked></MyChats>
      )}
      {searchClicked && (
        <SearchComponent setSearchClicked={setSearchClicked}></SearchComponent>
      )}
    </div>
  );
};

export default Sidebar;
