import React from "react";
import "./InputComponent.css";

type InputProps = {
  id: string,
  text: string,
  type: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<InputProps> = ({ id, text, type, value, onChange }) => {
  return(
    <input id={id} type={type} value={value} onChange={onChange} placeholder={text} required minLength={11} />
  )
}

export default InputComponent;