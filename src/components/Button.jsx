import React from "react";

const Button = ({ Onclick, btnText }) => {
  return (
    <div
      onClick={Onclick}
      className="p-3 cursor-pointer flex items-center justify-center bg-purple-500 rounded-xl text-white"
    >
      <p className="text-white text-sm"> {btnText}</p>
    </div>
  );
};

export default Button;
