import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="flexHeader">
        <div className="profileInfo">
          <div>
            <h3>Hello! my name is</h3>
            <h1 className="name_style">Diego Martinez</h1>
            <h3 className="description_style">
              Professional in mechatronics engineering with a master's degree in
              full stack development.
            </h3>
            <div className="profileImage"></div>
          </div>
        </div>
        <div>Social media</div>
      </div>
    </>
  );
};

export default Header;
