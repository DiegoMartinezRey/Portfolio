import React from "react";
import "./ButtonStyle.css";

const ButtonStyle = ({ title, type, link }) => {
  return (
    <>
      <button
        className={`buttonStyle ${type}`}
        onClick={() => (window.location.href = link)}
      >
        {title}
      </button>
    </>
  );
};

export default ButtonStyle;
