import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ChatPage from "./Pages/ChatPage";


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/chats' element={<ChatPage></ChatPage>}></Route>
      </Routes>
    </div>
  )
}

export default App;
