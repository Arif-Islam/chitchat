// import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const ChatPage = () => {
    const [chats, setChats] = useState([]);

    const fetchData = async () => {
        const {data} = await axios.get("http://localhost:5000/api/chats");
        setChats(data);
        console.log(data);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {
                chats.map(chat => (<p key={chat._id}>{chat.chatName}</p>))
            }
        </div>
    );
};

export default ChatPage;