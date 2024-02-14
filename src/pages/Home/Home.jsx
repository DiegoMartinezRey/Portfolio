import React from "react";
import AboutMe from "../../containers/AboutMe/AboutMe";
import Header from "../../containers/Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="flexHome_container">
        <div className="home_container">
          <Header />
        </div>
        <div className="home_container">
          <AboutMe />
        </div>
      </div>
    </>
  );
};

export default Home;
