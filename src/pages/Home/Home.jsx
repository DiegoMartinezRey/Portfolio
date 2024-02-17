import React from "react";
import AboutMe from "../../containers/AboutMe/AboutMe";
import Experience from "../../containers/Experience/Experience";
import Header from "../../containers/Header/Header";
import MyProjects from "../../containers/MyProjects/MyProjects";
import MySkills from "../../containers/MySkills/MySkills";
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
          <Experience />
          <MyProjects />
          <MySkills />
        </div>
      </div>
    </>
  );
};

export default Home;
