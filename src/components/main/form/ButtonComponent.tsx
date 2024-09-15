import React from "react";
import "./ButtonComponent.css";

type ButtonProps = {
  text: string,
  type: "button" | "submit" | "reset",
};

const ButtonComponent: React.FC<ButtonProps> = ({text, type}) => {
  return (
    <button type={type} >{text}</button>
  )
}

export default ButtonComponent;