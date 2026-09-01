import { BriefcaseBusiness, Dot } from "lucide-react";
import registersvg from "../assets/register.svg";
import Button from "../components/Button";

const Register = () => {
  function handleSignup() {
    console.log("signup");

    // axios.post("/register", { email, password, role });
  }
  return (
    <div className="h-screen w-full flex justify-center p-2 bg-purple-100 flex-col">
      <div className="flex items-center gap-2">
        <div className="logo">
          <BriefcaseBusiness size={32} className="text-blue-600" />
        </div>
        <p className="text-3xl font-bold">Jobify</p>
      </div>
      <div className="flex-1 flex items-center justify-center gap-44 p-4">
        <img src={registersvg} alt="Register" className="w-72 md:flex hidden" />
        <form
          action=""
          className="p-2 px-5   w-80 md:w-[450px]  py-3 bg-white rounded-xl shadow"
        >
          <p className="font-bold text-2xl mb-3">Create Your Account</p>
          <p className="text-sm">Join Jobify and get started to get job</p>
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
          <div className="flex flex-col gap-1 mt-3">
            <label htmlFor="" className="font-bold text-sm">
              Confirm password
            </label>
            <input
              type="password"
              placeholder="confirm your password"
              className="shadow px-2 rounded py-2 md:w-96"
            />
          </div>
          <div className="flex flex-col gap-1 mt-3 mb-5">
            <p className="font-bold text-sm">Register as:</p>
            <div className="flex gap-4 px-4">
              <div className="flex gap-2 items-center p-2 px-4 bg-purple-200 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center">
                  <Dot color="white" size={20} />
                </div>
                <p className="text-sm">Employee</p>
              </div>
              <div className="flex gap-2 items-center p-2 px-4 bg-purple-200 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center">
                  <Dot color="white" size={20} />
                </div>
                <p className="text-sm">Employer</p>
              </div>
            </div>
          </div>
          <Button btnText="Create Account" Onclick={handleSignup} />
        </form>
      </div>
    </div>
  );
};

export default Register;
