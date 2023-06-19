import { MdOutlineClose } from "react-icons/md";
import "../utils/styles.css";
import { useState } from "react";

const ProfileModal = ({ user, profileModal, setProfileModal }) => {
  console.log(user);
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 fade-in">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-gray-700 w-80 p-4 rounded-lg z-10 relative">
        <button
          className="absolute top-0 right-0 m-2 text-white hover:text-gray-300"
          onClick={() => {
            setProfileModal(false);
          }}
        >
          <MdOutlineClose className="w-6 h-6"></MdOutlineClose>
        </button>
        <div className="flex flex-col items-center justify-center my-8">
          <img
            className="w-auto rounded-full mx-auto mb-4"
            src={user?.data?.image || user?.data?.data?.image}
            alt=""
          />
          <h2 className="text-lg font-semibold mb-4 text-white text-center">
            {user?.data?.name || user?.data?.data?.name}
          </h2>
          <p className="text-white font-light mb-1">
            {user?.data?.data?.email}
          </p>
          <p className=" font-light text-blue-500">
            Connected to {user?.data?.data?.contacts?.length || 0} chats
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
