/* eslint-disable react/prop-types */
import Scrollbars from "react-custom-scrollbars";
import { BiArrowBack } from "react-icons/bi";
import { ChatState } from "../context/ChatProvider";
import axios from "axios";
import { toast } from "react-toastify";

const SearchComponent = ({
  setSearchClicked,
  searchResult,
  loading,
  setLoadingChat,
}) => {
  const { user, selectedChat, setSelectedChat, chats, setChats } = ChatState();

  const accessChat = async (userId) => {
    console.log("access chat user id", userId);
    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user?.data?.token || user?.token}`,
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/chat",
        { userId },
        config
      );

      if (!chats.find((chat) => chat._id === data._id)) {
        setChats([data, ...chats]);
      }

      setLoadingChat(false);
      setSelectedChat(data);
      setSearchClicked(false);
    } catch (error) {
      toast.error("Failed to fetch the chat!");
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div
        onClick={() => setSearchClicked(false)}
        className="flex items-center justify-center text-white bg-gray-800 hover:bg-gray-900 hover:cursor-pointer w-[88px] p-2 mb-6 rounded-lg"
      >
        <BiArrowBack className="mr-[6px] w-4 h-4 "></BiArrowBack>
        <p className="text-[15px]">Back</p>
      </div>
      {loading ? (
        <div className="">
          <div className="animate-pulse">
            <div className="bg-gray-200 h-6 w-1/2 mb-2"></div>
            <div className="bg-gray-200 h-6 w-1/3 mb-2"></div>
            <div className="bg-gray-200 h-6 w-2/3 mb-2"></div>
            <div className="bg-gray-200 h-6 w-1/4 mb-2"></div>
          </div>
        </div>
      ) : (
        <Scrollbars style={{ width: "100%", height: "650px" }}>
          {searchResult.map((result) => (
            <div
              key={result._id}
              className="flex items-center space-x-2 py-2 mb-1 pl-2 w-11/12 rounded-lg hover:bg-[#1A1E23] hover:cursor-pointer"
              onClick={() => accessChat(result._id)}
            >
              <img
                className="w-8 rounded-full hover:cursor-pointer"
                src={result?.image}
                alt=""
              />
              <div className="text-white">
                <p className="mb-1 text-lg">{result?.name}</p>
              </div>
            </div>
          ))}
          {/* {searchResult.length === 0 && (
            <p className="text-center text-lg">No user found!</p>
          )} */}
        </Scrollbars>
      )}
    </div>
  );
};

export default SearchComponent;
