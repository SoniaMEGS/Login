import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import loginLogo from "../assets/loginLogo.svg";
import appFirebase from "../credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);

const RegisterForm = () => {
  //const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <img src={loginLogo} alt="Logo de inicio de sesión" />
        <div>
          <label className="font-semibold">Name</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div>
          <label className="font-semibold">Country</label>
          <input type="text" placeholder="Enter country" />
        </div>
        <div>
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <input type="text" name="email" placeholder="Enter email" />
        </div>
        <div>
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
        <button>Sing up</button>
      </form>
    </div>
  );
};

export default RegisterForm;
