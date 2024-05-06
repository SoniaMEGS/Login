import React from "react";

const InputError = ({ message, type }) => {
  return (
    <div
      key={type}
      className="flex items-center justify-between mt-2 text-red-400 mb-2"
    >
      <p className="text-xs leading-3 tracking-normal">{message}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-circle-x"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx={12} cy={12} r={9} />
        <path d="M10 10l4 4m0 -4l-4 4" />
      </svg>
    </div>
  );
};

export default InputError;
