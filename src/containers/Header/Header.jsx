import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="flexHeader">
        <div className="profileInfo">
          <div className="infoFlex">
            <div>
              <h3>Hello! my name is</h3>
              <h1 className="name_style">Diego Martinez</h1>
            </div>
            <h3 className="description_style">
              Professional in mechatronics engineering with a master's degree in
              full stack development.
            </h3>
            <div className="profileImage"></div>
          </div>
        </div>
        <div className="iconFlex">
          <FontAwesomeIcon
            icon={faGithub}
            size="2xl"
            className="iconStyle"
            onClick={() =>
              (window.location.href = "https://github.com/DiegoMartinezRey")
            }
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2xl"
            className="iconStyle"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/mechatronicengineerdiego/")
            }
          />
          <FontAwesomeIcon
            icon={faFile}
            size="2xl"
            className="iconStyle"
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/mechatronicengineerdiego/")
            }
          />
        </div>
      </div>
    </>
  );
};

export default Header;
