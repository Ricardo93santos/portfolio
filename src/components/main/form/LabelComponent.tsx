import React from "react";
import "./LabelComponent.css";

type LabelProps = {
  htmlFor: string,
  text: string,
};

const LabelComponent: React.FC<LabelProps> = ({htmlFor, text}) => {
  return (
    <label htmlFor={htmlFor}>{text}</label>
  )
};

export default LabelComponent;