import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Authentication = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      {login ? (
        <Login login={login} setLogin={setLogin}></Login>
      ) : (
        <Signup login={login} setLogin={setLogin}></Signup>
      )}
    </div>
  );
};

export default Authentication;
