/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { AiOutlinePlus } from "react-icons/ai";
import { ChatState } from "../context/ChatProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { getSender, getSenderImage } from "../config/ChatLogics";

const MyChats = ({chats}) => {
  const [loggedUser, setLoggedUser] = useState();
  const { user, selectedChat, setSelectedChat } = ChatState();

  // useEffect(() => {
  //   setLoggedUser(JSON.parse(localStorage.getItem("chitchatUserInfo")));

  //   // console.log(loggedUser);
  //   // console.log("chats", chats);

  //   const fetchChats = async () => {
  //     try {
  //       // console.log(user?.data?.token);
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${loggedUser?.data?.token}`,
  //         },
  //       };

  //       // console.log('chats', chats);
  //       console.log("fetching chats....");

  //       const { data } = await axios.get(
  //         `http://localhost:5000/api/chat`,
  //         config
  //       );

  //       console.log("all chats", data);

  //       setChats(data);
  //     } catch (error) {
  //       toast.error("Failed to fetch the chats!");
  //     }
  //   };

  //   console.log("chats", chats);

  //   fetchChats();
  // }, [loggedUser?.data?.token, setChats, chats]);

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
        {chats ? (
          chats.map((chat) => (
            <div
              key={chat._id}
              className={`flex items-center space-x-4 py-2 mb-3 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer ${
                selectedChat === chat
                  ? "bg-[#1A1E23] shadow-lg shadow-blue-950"
                  : ""
              } `}
              onClick={() => setSelectedChat(chat)}
            >
              {/* <img
                className="w-8 rounded-full hover:cursor-pointer"
                src={getSenderImage(loggedUser, chat.users)}
                alt=""
              /> */}
              <div className="text-white">
                <p className="mb-1 text-[15px]">
                  {/* {!chat.isGroupChat
                    ? getSender(loggedUser, chat.users)
                    : chat.chatName} */}{" "}
                  {chat.chatName}
                </p>
                <p className="text-sm font-light -mt-[2px]">
                  Hey man! dont loose your cool
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="pl-2 text-white font-light">
            Find users to start a conversation
          </div>
        )}
      </Scrollbars>
    </div>
  );
};

export default MyChats;
