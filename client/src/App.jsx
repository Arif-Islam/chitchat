import { Route, Routes } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import "./App.css";
import Authentication from "./Pages/Authentication";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Authentication></Authentication>}></Route>
        <Route path="/chats" element={<ChatPage></ChatPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
