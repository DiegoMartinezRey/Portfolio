import React from "react";
import "./ButtonStyle.css";
import { Button } from "./styles";

const ButtonStyle = ({ title, type, link }) => {
  return (
    <>
      <Button
        hoverColor={type}
        // className={`buttonStyle ${type}`}
        onClick={() => (window.location.href = link)}
      >
        {title}
      </Button>
    </>
  );
};

export default ButtonStyle;
