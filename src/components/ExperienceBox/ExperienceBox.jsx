import React, { useEffect, useState } from "react";
import experiencesData from "../../data/experiences.json";
import ButtonStyle from "../ButtonStyle/ButtonStyle";
import "./ExperienceBox.css";

const ExperienceBox = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = () => {
    setExperiences(experiencesData);
  };
  return (
    <>
      <ul className="experienceBox_Container">
        {experiences.map((experience, id) => (
          <li key={id} className="listFlex">
            <div className="experienceColumns">
              <div className="infoProyectFlex">
                <h3>{experience.name}</h3>
                <p>{experience.description}</p>
                <div className="buttonsFlex">
                  {experience.github_FE && (
                    <ButtonStyle
                      title="FrontEnd"
                      type="Blue"
                      link={experience.github_FE}
                    />
                  )}
                  {experience.github_BE && (
                    <ButtonStyle
                      title="BackEnd"
                      type="Blue"
                      link={experience.github_BE}
                    />
                  )}
                  {experience.web && (
                    <ButtonStyle
                      title="Web"
                      type="purple"
                      link={experience.web}
                    />
                  )}
                </div>
              </div>
              <div>
                <img
                  className="imageProyect"
                  src={experience.image}
                  alt={experience.name}
                />
                <div></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ExperienceBox;
