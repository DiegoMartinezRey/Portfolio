import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="profileInfo">
          <h3>Hello! my name is</h3>
          <h1 className="name_style">Diego Martinez</h1>
          <h2 className="description_style">
            Professional in mechatronics engineering with a master's degree in
            full stack development.
          </h2>
        </div>
        <div className="profileImage"></div>
      </div>
    </>
  );
};

export default Header;
