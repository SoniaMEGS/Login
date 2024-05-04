import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      {/* <div>{user ? <Home user={user.email} /> : <Login />}</div> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
