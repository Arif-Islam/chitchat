import { useState } from "react";
import { ChatState } from "../context/ChatProvider";
import logo from "../assets/Yellow_Minimalist_Round_Shaped_Cafe_Logo-removebg-preview.png";
import { MdNotifications } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import Conversation from "../components/Conversation";
import bgImg from "../assets/v1016-b-09.jpg";

const ChatPage = () => {
  const { user } = ChatState();
  console.log("user", user);

  return (
    // <div style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: "fixed", backgroundRepeat: "no-repeat" }} className="p-10">
    <div className="bg-gradient-to-r from-blue-950 via-purple-900 to-sky-950 p-10">
      <div className="flex items-center">
        <Sidebar user={user}></Sidebar>
        {/* <div className="bg-black h-screen w-[2px]"></div> */}
        <Conversation></Conversation>
      </div>
    </div>
  );
};

export default ChatPage;
