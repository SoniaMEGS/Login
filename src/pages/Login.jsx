import { useState, useEffect } from "react";
import appFirebase from "../credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import loginLogo from "../assets/loginLogo.svg";

const Login = () => {
  return (
    <section className="h-svh bg-gradient-to-tl from-green-200 to-indigo-200">
      <LoginForm />
    </section>
  );
};

export default Login;
