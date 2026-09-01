import React from "react";
import { Marquee, navLinks } from "../constants";
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      {/* main header */}
      <div className="flex py-3 px-12 justify-between items-center">
        {/* logo */}
        <span className=" flex gap-2 items-center">
          <BriefcaseBusiness className="text-blue-600 " size={32} />
          <h4 className="text-3xl font-bold">Jobify</h4>
        </span>
        {/* navlinks */}
        <span className="flex gap-6 text-gray-700 font-semibold">
          {navLinks.map((link, index) => (
            <p key={index}>{link}</p>
          ))}
        </span>
        {/* buttons */}
        <span className=" flex gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-5 rounded-md border py-1.5 duration-400 bg-white text-blue-600 hover:translate-y-1.5 hover:text-white hover:bg-blue-600"
          >
            Log In
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-5 rounded-md py-1.5 duration-400 hover:border-blue-600 hover:border hover:translate-y-1.5 bg-blue-600 text-white hover:text-blue-600 hover:bg-white"
          >
            Sign Up
          </button>
        </span>
      </div>
    </header>
  );
};

export default Header;
