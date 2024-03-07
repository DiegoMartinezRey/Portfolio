import React, { useEffect, useState } from "react";
import experiencesData from "../../data/experiences.json";

const ExperienceBox = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences();
  }, []);

  const getExperiences = () => {
    setExperiences(experiencesData);
  };
  return (
    <div>
      <h3>Experience</h3>
      <ul>
        {experiences.map((experience, id) => (
          <li key={id}>
            <h3>{experience.name}</h3>
            <p>{experience.description}</p>
            <p>{experience.tools}</p>
            <p>{experience.begin}</p>
            <p>{experience.end}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceBox;
