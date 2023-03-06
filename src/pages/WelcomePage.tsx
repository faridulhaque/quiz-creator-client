import React from "react";
import Register from "../components/authComponents/Register";
import Navbar from "../components/shared/Navbar";
import WelcomeContentText from "../components/textContent/WelcomeContentText";
import { useState } from "react";
import Login from "../components/authComponents/Login";

const WelcomePage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="w-full h-screen">
      <Navbar></Navbar>

      <div className="flex items-center justify-around w-full h-full">
        <WelcomeContentText></WelcomeContentText>
        {login ? <Login setLogin={setLogin}></Login> : <Register setLogin={setLogin}></Register>}
      </div>
    </div>
  );
};

export default WelcomePage;
