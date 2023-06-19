import { useEffect, useState } from "react";
import { ChatState } from "../context/ChatProvider";
import logo from "../assets/Yellow_Minimalist_Round_Shaped_Cafe_Logo-removebg-preview.png";
import { MdNotifications } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import Conversation from "../components/Conversation";
import bgImg from "../assets/v1016-b-09.jpg";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div className="bg-gradient-to-r from-blue-950 via-purple-900 to-sky-950 p-10">
      <div className="flex items-center">
        <Sidebar></Sidebar>
        <Conversation></Conversation>
      </div>
    </div>
  );
};

export default ChatPage;
