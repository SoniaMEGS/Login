import React from "react";
import loginLogo from "../assets/loginLogo.svg";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <section className="h-svh bg-gradient-to-tl from-green-200 to-indigo-200 lg:flex lg:justify-center lg:items-center">
      <RegisterForm />
    </section>
  );
};

export default Register;
