import React, { useState } from "react";
import registersvg from "../assets/register.svg";
import Button from "../components/Button";
import { BriefcaseBusiness, Dot } from "lucide-react";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const loginData = {
      fullName,
      password,
      role,
    };

    console.log(loginData);

    // Later:
    // axios.post("/login", loginData);
  }

  return (
    <main>
      <div className="h-screen w-full flex justify-center p-2 bg-purple-100 flex-col">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="logo">
            <BriefcaseBusiness size={32} className="text-blue-600" />
          </div>

          <p className="text-3xl font-bold">Jobify</p>
        </div>

        <div className="flex-1 flex items-center justify-center gap-44 p-4">
          <img src={registersvg} alt="Login" className="w-72 md:flex hidden" />

          <form
            onSubmit={handleLogin}
            className="p-2 px-5 w-80 md:w-112.5 py-3 bg-white rounded-xl shadow"
          >
            <p className="font-bold text-2xl mb-3">Welcome Back</p>

            <p className="text-sm">Login to your account</p>

            {/* FULL NAME */}
            <div className="flex flex-col gap-1 mt-3">
              <label className="font-bold text-sm">Full Name</label>

              <input
                type="text"
                placeholder="Enter your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="shadow px-2 rounded py-2 md:w-96"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-1 mt-3">
              <label className="font-bold text-sm">Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow px-2 rounded py-2 md:w-96"
              />
            </div>

            {/* ROLE */}
            <div className="flex flex-col gap-1 mt-3">
              <p className="font-bold text-sm">Login as:</p>

              <div className="flex gap-4 px-4">
                {/* EMPLOYEE */}
                <div
                  onClick={() => setRole("employee")}
                  className={`flex gap-2 items-center p-2 px-4 rounded-lg cursor-pointer transition ${
                    role === "employee"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-200 hover:bg-purple-300"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full flex items-center justify-center ${
                      role === "employee" ? "bg-white" : "bg-purple-500"
                    }`}
                  >
                    {role === "employee" && <Dot color="#9333ea" size={20} />}
                  </div>

                  <p className="text-sm">Employee</p>
                </div>

                {/* EMPLOYER */}
                <div
                  onClick={() => setRole("employer")}
                  className={`flex gap-2 items-center p-2 px-4 rounded-lg cursor-pointer transition ${
                    role === "employer"
                      ? "bg-purple-600 text-white"
                      : "bg-purple-200 hover:bg-purple-300"
                  }`}
                >
                  <div
                    className={`w-3 h-3 rounded-full flex items-center justify-center ${
                      role === "employer" ? "bg-white" : "bg-purple-500"
                    }`}
                  >
                    {role === "employer" && <Dot color="#9333ea" size={20} />}
                  </div>

                  <p className="text-sm">Employer</p>
                </div>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <span className="flex justify-end">
              <p className="text-md mb-3 text-blue-600 mt-2 cursor-pointer hover:underline">
                Forgot password?
              </p>
            </span>

            <Button btnText="Log In" Onclick={handleLogin} />

            {/* SIGN UP */}
            <span className="flex justify-center mt-3">
              <p>
                Don't have an account?{" "}
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
