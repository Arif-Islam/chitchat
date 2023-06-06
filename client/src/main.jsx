import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChatProvider from "./context/ChatProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChatProvider>
        <App />
        <ToastContainer position="top-center" autoClose="2500" />
      </ChatProvider>
    </BrowserRouter>
  </React.StrictMode>
);
