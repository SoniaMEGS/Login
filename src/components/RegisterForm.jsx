import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputError from "./InputError";
import { RegisterFormValidations } from "../utils/RegisterFormValidations";
import loginLogo from "../assets/loginLogo.svg";
import appFirebase from "../credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    const { email, password } = data;
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col items-center justify-between bg-white lg:bg-white/60 lg:max-w-[95%] lg:max-h-[95%] lg:rounded-lg">
      <article className="w-full relative flex flex-col items-center p-4 ">
        <img
          className="w-full h-32 rounded-lg object-cover"
          src="https://cdn.tuk.dev/assets/Image.jpg"
        />
        <figure className=" absolute -bottom-4 w-20 h-20 rounded-full flex justify-center bg-white border-2 border-green-200 ">
          <img src={loginLogo} alt="Logo de inicio de sesión" />
        </figure>
      </article>
      <article className="w-full h-full flex flex-col items-center justify-center p-4 ">
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="h-full w-3/4 max-w-96 flex flex-col justify-between gap-6 my-6 lg:max-w-full lg:items-center"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-12 lg:justify-between">
            <div className=" flex flex-col lg:w-96">
              <label className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2">
                Name
              </label>
              <input
                {...register("name", RegisterFormValidations.name)}
                type="text"
                name="name"
                placeholder="Enter name"
                className={`w-full focus:outline-none focus:border focus:border-indigo-400 font-normal h-10 flex items-center pl-3 text-sm rounded-lg border bg-white shadow  ${
                  errors.name ? "border-red-400" : ""
                }`}
              />
              {errors.name && (
                <InputError
                  message={errors.name.message}
                  type={errors.name.type}
                />
              )}
            </div>
            <div className=" flex flex-col lg:w-96">
              <label className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2">
                Last name
              </label>
              <input
                {...register("lastName", RegisterFormValidations.lastName)}
                type="text"
                name="lastName"
                placeholder="Enter last name"
                className={`w-full focus:outline-none focus:border focus:border-indigo-400 font-normal h-10 flex items-center pl-3 text-sm rounded-lg border bg-white shadow  ${
                  errors.lastName ? "border-red-400" : ""
                }`}
              />
              {errors.lastName && (
                <InputError
                  message={errors.lastName.message}
                  type={errors.lastName.type}
                />
              )}
            </div>
            <div className=" flex flex-col lg:w-96">
              <label className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2">
                Country
              </label>
              <input
                {...register("country", RegisterFormValidations.country)}
                type="text"
                name="country"
                placeholder="Enter country"
                className={`w-full focus:outline-none focus:border focus:border-indigo-400 font-normal h-10 flex items-center pl-3 text-sm rounded-lg border bg-white shadow  ${
                  errors.country ? "border-red-400" : ""
                }`}
              />
              {errors.country && (
                <InputError
                  message={errors.country.message}
                  type={errors.country.type}
                />
              )}
            </div>
            <div className=" flex flex-col lg:w-96">
              <label
                className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", RegisterFormValidations.email)}
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
            <div className=" flex flex-col lg:w-96">
              <label
                className="text-gray-800 dark:text-gray-100 text-md font-bold leading-tight tracking-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", RegisterFormValidations.password)}
                type="password"
                name="password"
                placeholder="Enter password"
                className={`w-full focus:outline-none focus:border focus:border-indigo-400 font-normal h-10 flex items-center pl-3 text-sm rounded-lg border bg-white shadow  ${
                  errors.password ? "border-red-400" : ""
                }`}
              />
              {errors.password && (
                <InputError
                  message={errors.password.message}
                  type={errors.password.type}
                />
              )}
            </div>
          </div>
          <button className=" text-md font-semibold leading-none text-white bg-indigo-400 border rounded-lg hover:bg-indigo-700 py-4 w-full lg:w-80 ">
            Sing up
          </button>
        </form>
      </article>
    </div>
  );
};

export default RegisterForm;
