import React from "react";
import { useState, useRef } from "react";
import useClickOutside from "../../../lib/useClick.ts";
import ArrowDownIcon from "../ArrowDownIcon/ArrowDownIcon";
import "./selectInput.css";

const SelectInput = ({ name, value, onChange, options }) => {
  const [showOptions, setShowOptions] = useState(false);
  const elementRef = useRef(null);

  const onClickBox = () => {
    setShowOptions((prev) => !prev);
  };

  const onSelectOption = (value) => {
    onChange(value);
    setShowOptions(false);
  };

  useClickOutside(elementRef, () => setShowOptions(false));
  return (
    <div className="select-input" ref={elementRef}>
      <label className="input-label">{name}</label>
      <div
        className="input-box"
        style={{
          width: "100px",
          borderBottomRightRadius: showOptions ? "0" : undefined,
          borderBottomLeftRadius: showOptions ? "0" : undefined,
        }}
        onClick={onClickBox}
      >
        {value}
        <ArrowDownIcon />
      </div>
      <div
        className="options"
        style={{
          opacity: !showOptions ? "0" : "100%",
          pointerEvents: !showOptions ? "none" : "auto",
        }}
      >
        {options.map((option) => (
          <div
            className="option"
            onClick={() => onSelectOption(option)}
            key={option}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectInput;
