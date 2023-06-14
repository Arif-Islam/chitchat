import { MdOutlineClose } from "react-icons/md";

const ProfileModal = ({ profileModal, setProfileModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="bg-gray-700 w-64 p-4 rounded-lg z-10 relative">
        <button
          className="absolute top-0 right-0 m-2 text-white hover:text-gray-300"
          onClick={() => setProfileModal(false)}
        >
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 5.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> */}
          <MdOutlineClose className="w-6 h-6"></MdOutlineClose>
        </button>
        <h2 className="text-lg font-semibold mb-4 text-white text-center">
          AJ Styles
        </h2>
        <p className="text-white">aj@gmail.com</p>
        <p className="text-white">Connected to 17 chats</p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ProfileModal;
