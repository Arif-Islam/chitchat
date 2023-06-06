import { useState } from "react";
import { ChatState } from "../context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();

  return <div>{user && <p>Chats</p>}</div>;
};

export default ChatPage;
