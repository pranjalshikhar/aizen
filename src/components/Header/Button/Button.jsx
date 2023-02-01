import React from "react";
import "./button.css";

const Button = ({ children, type, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${type} ${disabled ? "disabled" : ""}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
