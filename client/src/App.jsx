import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ChatPage from "./Pages/ChatPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/chats" element={<ChatPage></ChatPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
