import React from "react";
import { authType } from "../../types/frontendTypes";

const Login = ({setLogin}:authType) => {

  return (
    <div
      className="w-5/12"
      data-aos="fade-down-left"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <form className="w-full py-10 px-5 bg-white rounded-md shadow-lg border-[#539165] border-y-4">
        <h2 className="text-[#539165] text-3xl text-center mb-5">Login Here!</h2>

        <div className="w-11/12 mx-auto mb-5">
          <label className="block text-[#539165] text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="block w-full my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </div>
        <div className="w-11/12 mx-auto mb-5">
          <label className="block text-[#539165] text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="block w-full my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </div>
        <div className="w-11/12 mb-3 mx-auto">
          <small className="text-sm text-gray-500">
            Don't have an account?{" "}
            <span onClick={()=>setLogin(false)} className="text-gray-900 hover:underline cursor-pointer">
              Register.
            </span>
          </small>
        </div>
        <div className="w-11/12 mx-auto mb-5">
          <button className="bg-[#539165] text-white py-3 block w-full rounded-md hover:shadow-md">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
