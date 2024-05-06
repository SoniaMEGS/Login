import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginLogo from "../assets/loginLogo.svg";
import loginDots from "../assets/dots.svg";
import appFirebase from "../credentials";
import InputError from "./InputError";
import { ErrorMessage } from "@hookform/error-message";
import { LoginFormValidations } from "../utils/validations";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registered, setRegistered] = useState(false);
  const navigate = useNavigate();

  const handleAutentication = async (data) => {
    const { email, password } = data;
    console.log(data);

    if (!registered) {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-between lg:flex-row lg:h-svh">
      <article className="w-full flex flex-col items-center justify-center p-4 md:mt-16 lg:h-svh">
        <form
          onSubmit={handleSubmit(handleAutentication)}
          className="w-3/4 max-w-80 flex flex-col gap-6 "
        >
          <figure className="flex justify-center">
            <img src={loginLogo} alt="Logo de inicio de sesión" />
          </figure>
          <div className="flex flex-col">
            <label
              className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", LoginFormValidations.email)}
              type="text"
              name="email"
              placeholder="Enter email"
              className={`w-full focus:outline-none focus:border focus:border-indigo-400 font-normal h-10 flex items-center pl-3 text-sm rounded-lg border bg-white shadow  ${
                errors.email ? "border-red-400" : ""
              }`}
            />
            {errors.email && (
              <InputError
                message={errors.email.message}
                type={errors.email.type}
              />
            )}
          </div>
          <div className="flex flex-col">
            <label
              className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`w-full focus:outline-none focus:border focus:border-indigo-400 font-normal h-10 flex items-center pl-3 text-sm rounded-lg border bg-white shadow ${
                errors.password ? "text-red-400 border-red-400" : ""
              }`}
              {...register("password", LoginFormValidations.password)}
              type="password"
              name="password"
              placeholder="Enter password"
            />
            {errors.password && (
              <InputError
                message={errors.password.message}
                type={errors.password.type}
              />
            )}
          </div>
          <button
            role="button"
            aria-label="login"
            type="submit"
            className=" text-md font-semibold leading-none text-white bg-indigo-400 border rounded-lg hover:bg-indigo-700 py-4 w-full"
          >
            Login
          </button>
        </form>

        <div className=" w-3/4 max-w-80 mt-6 flex justify-evenly items-center">
          <span>You don't have an account</span>
          <NavLink to={`/register`}>
            <button className="text-sm font-semibold leading-none text-white bg-indigo-400 border rounded-lg hover:bg-indigo-700 px-2 py-2">
              Sing up
            </button>
          </NavLink>
        </div>
      </article>
      <article
        className=" w-full flex flex-col items-center p-4 lg:h-svh lg:justify-evenly"
        style={{
          backgroundImage: "url(https://cdn.tuk.dev/assets/Image.jpg)",
        }}
      >
        <figure className="w-full flex justify-start">
          <img src={loginDots} alt="" className="w-1/3 md:w-1/4 lg:w-1/2" />
        </figure>
        <div className="w-4/5 my-4">
          <h3 className="text-3xl font-extrabold leading-tight text-white">
            Join us
          </h3>
          <p className="text-lg text-white leading-normal pt-3 xl:w-10/12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <figure className="w-full flex justify-end">
          <img src={loginDots} alt="" className="w-1/3 md:w-1/4 lg:w-1/2" />
        </figure>
      </article>
    </div>
  );
};

export default LoginForm;
