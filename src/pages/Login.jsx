import { useState, useEffect } from "react";
import appFirebase from "../credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(appFirebase);
import Home from "../pages/Home";
import LoginForm from "../components/LoginForm";
import loginLogo from "../assets/loginLogo.svg";

const Login = () => {
  return (
    <section>
      <LoginForm />
    </section>
  );
};

export default Login;
