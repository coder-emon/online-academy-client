import React from "react";
import { Link } from "react-router-dom";
import registerImg from "../../assets/undraw_access_account_re_8spm (1).svg";
const Register = () => {
  return (
    <div className="w-full py-12 px-0 min-h[80vh] flex justify-center items-center space-x-4 bg-slate-500 dark:bg-slate-800">
      <div className="w-[35rem] shadow-lg p-9 rounded animate-slide-up">
        <h2 className="text-slate-900 dark:text-slate-200 font-bold text-3xl text-center">
          Register
        </h2>
        <form className="mt-5 w-full flex flex-col gap-2">
          <div className="w-full inline-grid">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="text"
              placeholder="Photo Url"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="email"
              placeholder="Email"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="password"
              placeholder="Password"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
              required
            />
          </div>
          <div className="w-full inline-grid">
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded bg-gray-300 border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
            />
          </div>
          <button
            className="rounded bg-blue-500 hover:bg-blue-600 text-white border-none focus:outline-none w-full px-3 py-2 focus:ring-2"
            type="submit"
          >
            Register
          </button>
          <p>
            <span className="text-gray-200 ">Already have an account?</span>{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="animate-slide-down hidden md:flex ">
        <img src={registerImg} alt="" className="w-auto h-[180px]" />
      </div>
    </div>
  );
};

export default Register;
