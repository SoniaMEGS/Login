import React, { useState } from "react";
import loginLogo from "../assets/loginLogo.svg";
import appFirebase from "../credentials";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);

const LoginForm = () => {
  const [registered, setRegistered] = useState(false);

  const handleAutentication = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    if (registered) {
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      await signInWithEmailAndPassword(auth, email, password);
    }
  };

  return (
    <>
      <article className="bg-purple-600">
        <form onSubmit={handleAutentication}>
          <img src={loginLogo} alt="Logo de inicio de sesión" />
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
            <input
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </div>
          <button>{registered ? "Sing up" : "Login"}</button>
        </form>
        <h4>
          {registered ? "You have an account" : "You don't have an account "}
          <button onClick={() => setRegistered(!registered)}>
            {registered ? "Login" : "Sing up"}
          </button>
        </h4>
      </article>
      <article></article>
    </>
  );
};

export default LoginForm;
