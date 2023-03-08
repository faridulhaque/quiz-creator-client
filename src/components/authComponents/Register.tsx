import React, { useState } from "react";
import { authType, regInfoType } from "../../types/componentTypes";
import { useRegisterMutation } from "../../api/queries/authApi";
import Loading from "../shared/Loading";

const Register = ({ setLogin }: authType) => {
  const [error, setError] = useState("");

  const [
    register,
    {
      isLoading: registering,
      isError: isRegError,
      error: regError,
      data: regData,
    },
  ] = useRegisterMutation<any>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = e.currentTarget.fullName.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const rePassword = e.currentTarget.rePassword.value;

    if (password.length < 8) {
      return setError("password must be at least 8 characters");
    }

    if (!email || !password || !rePassword || !name) {
      return setError("Input fields must be fulfilled");
    }

    if (password !== rePassword) {
      return setError("Both password must be same");
    }
    const regInfo:regInfoType = {
      name,
      email,
      password,
    };
    setError("");
    register(regInfo);
  };

  if (isRegError) {
    console.log(regError);
  }



  return (
    <>
      <div
        className="w-5/12"
        data-aos="fade-down-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        {!regData?.data?._id ? (
          <form
            onSubmit={handleSubmit}
            className="w-full py-10 px-5 bg-white rounded-md shadow-lg border-[#539165] border-y-4"
          >
            <h2 className="text-[#539165] text-3xl text-center mb-5">
              Register Here!
            </h2>
            <div className="w-11/12 mx-auto mb-5">
              <label className="block text-[#539165] text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="block w-full my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
                type="text"
                placeholder="Enter your full name"
                name="fullName"
              />
            </div>
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
            <div className="w-11/12 mx-auto mb-5">
              <label className="block text-[#539165] text-sm font-bold mb-2">
                Re-type your Password
              </label>
              <input
                className="block w-full my-2 px-2 py-3 border-[#539165] border-1 rounded-lg bg-[#f5f5f5] placeholder-gray-400 text-gray-900 outline-[#539165]"
                type="password"
                placeholder="Re-type your password"
                name="rePassword"
              />
            </div>
            {error && (
              <div className="w-11/12 mb-3 mx-auto">
                <small className="text-sm text-red-500">{error}</small>
              </div>
            )}
            <div className="w-11/12 mb-3 mx-auto">
              <small className="text-sm text-gray-500">
                Already have an account?{" "}
                <span
                  onClick={() => setLogin(true)}
                  className="text-gray-900 hover:underline cursor-pointer"
                >
                  Login
                </span>
              </small>
            </div>
            {registering ? (
              <Loading></Loading>
            ) : (
              <div className="w-11/12 mx-auto mb-5">
                <button className="bg-[#539165] text-white py-3 block w-full rounded-md hover:shadow-md">
                  Register
                </button>
              </div>
            )}
          </form>
        ) : (
          <p className="w-full text-md text-[#539165] py-10 px-5 text-center bg-white rounded-md shadow-lg border-[#539165] border-y-4">
            You have successfully registered! <span onClick={()=>setLogin(true)} className="text-[#539165] cursor-pointer text-xl font-bold underline">Login</span> to continue
          </p>
        )}
      </div>
    </>
  );
};

export default Register;
