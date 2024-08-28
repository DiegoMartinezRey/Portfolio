import React from "react";
import AboutMe from "../../containers/AboutMe/AboutMe";
import Experience from "../../containers/Experience/Experience";
import Header from "../../containers/Header/Header";
import MySkills from "../../containers/MySkills/MySkills";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="flexHome">
        <div className="homeContainer">
          <div className="header_container">
            <Header />
          </div>
          <div className="home_container">
            <AboutMe />
            <Experience />
            {/* <MyProjects /> */}
            <MySkills />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
