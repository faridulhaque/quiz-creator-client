import React from "react";
import HomeLeft from "../components/homePageComps/HomeLeft";
import HomeMid from "../components/homePageComps/HomeMid";
import HomeRight from "../components/homePageComps/HomeRight";
import Navbar from "../components/shared/Navbar";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <Navbar></Navbar>
      <div className="flex justify-evenly w-full h-full">
        <HomeLeft></HomeLeft>
        <HomeMid></HomeMid>
        <HomeRight></HomeRight>
      </div>
    </div>
  );
};

export default HomePage;
