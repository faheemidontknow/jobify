import React from "react";
import registersvg from "../assets/register.svg";
import Button from "../components/Button";
import { BriefcaseBusiness } from "lucide-react";
import { useNavigate } from "react-router";

const Login = () => {
  function handleSignup() {
    console.log("signup");
    const navigate = useNavigate();
  }
  return (
    <main>
      <div className="h-screen w-full flex justify-center p-2 bg-purple-100 flex-col">
        <div className="flex items-center gap-2">
          <div className="logo">
            <BriefcaseBusiness size={32} className="text-blue-600" />
          </div>
          <p className="text-3xl font-bold">Jobify</p>
        </div>
        <div className="flex-1 flex items-center justify-center gap-44 p-4">
          <img
            src={registersvg}
            alt="Register"
            className="w-72 md:flex hidden"
          />
          <form
            action=""
            className="p-2 px-5   w-80 md:w-[450px]  py-3 bg-white rounded-xl shadow"
          >
            <p className="font-bold text-2xl mb-3">Welcome Back</p>
            <p className="text-sm">Login to your account</p>
            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="" className="font-bold text-sm">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="shadow px-2 rounded py-2 md:w-96"
              />
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label htmlFor="" className="font-bold text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="shadow px-2 rounded py-2 md:w-96"
              />
            </div>
            <span className="flex justify-end">
              <p className="text-md  mb-3  text-blue-600 mt-2 cursor-pointer hover:underline">
                forgot password?
              </p>
            </span>

            <Button btnText="Log In" Onclick={handleSignup} />
            <span className="flex justify-center mt-3">
              <p>
                Dont have an account?{" "}
                <span
                  onClick={() => navigate("/register")}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  Sign Up
                </span>
              </p>
            </span>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
