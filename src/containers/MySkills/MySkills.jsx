import React, { useEffect, useState } from "react";
import skills from "../../data/skills.json";
import "./MySkills.css";

const MySkills = () => {
  const [mySkills, setMySkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    setMySkills(skills);
  };

  return (
    <div>
      <h2>Skills</h2>
      <div className="flexLogos">
        {mySkills.map((skill, id) => (
          <div key={id} className="logoStyle">
            <div className="logoContainer">
              <img className="logo" src={skill.logo} alt={skill.name} />
            </div>
            <div className="nameLogo">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
