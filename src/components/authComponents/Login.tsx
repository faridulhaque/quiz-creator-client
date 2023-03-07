import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../api/queries/authApi";
import { authType, loginInfoType } from "../../types/frontendTypes";
import Loading from "../shared/Loading";

const Login = ({ setLogin }: authType) => {
  const [error, setError] = useState<string>("");
  const navigate =useNavigate()

  const [
    login,
    { isLoading: loggingIn, error: loginError, data },
  ] = useLoginMutation<any>();


  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user") || "null");
    let token = JSON.parse(localStorage.getItem("token") || "null")
    if(user?._id && token){
      navigate("/")
    }
  }, [data, navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (!email || !password) {
      return setError("Email and password required");
    }

    const loginInfo: loginInfoType = {
      email,
      password,
    };

    login(loginInfo);
  };




  
  if (data?.token) {
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.loggedInUser));
  }


  return (
    <div
      className="w-5/12"
      data-aos="fade-down-left"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full py-10 px-5 bg-white rounded-md shadow-lg border-[#539165] border-y-4"
      >
        <h2 className="text-[#539165] text-3xl text-center mb-5">
          Login Here!
        </h2>

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
            <span
              onClick={() => setLogin(false)}
              className="text-gray-900 hover:underline cursor-pointer"
            >
              Register.
            </span>
          </small>
        </div>
        {error && (
          <div className="w-11/12 mb-3 mx-auto">
            <small className="text-sm text-red-500">{error}</small>
          </div>
        )}
        {loginError?.status === 400 && (
          <div className="w-11/12 mb-3 mx-auto">
            <small className="text-sm text-red-500">{loginError?.data?.message}</small>
          </div>
        )}
        {loggingIn ? (
          <Loading></Loading>
        ) : (
          <div className="w-11/12 mx-auto mb-5">
            <button className="bg-[#539165] text-white py-3 block w-full rounded-md hover:shadow-md">
              Login
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
