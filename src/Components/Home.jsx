import React from "react";
import logo from "../images/logo.png"; // relative path to image

const Home = () => {
  return (
    <div className="home">
      <img
        src={logo}
        className="img-home"
        alt={"logo"}
        style={{ paddingTop: "10%", paddingLeft:'10%' }}
      />
      <h1>Hi you! Welcome to Yorkshire </h1>
    </div>
  );
};

export default Home;
