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
            <img
              className="profileImage"
              src="/images/image_profile.jpg"
              alt=""
            />
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
                "https://drive.google.com/file/d/19GM2Ub7Kgl32iLmED7h863W_Ss2ItZtc/view?usp=sharing")
            }
          />
        </div>
      </div>
    </>
  );
};

export default Header;
