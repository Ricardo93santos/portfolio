import React from "react";
import "./InputComponent.css";

type InputProps = {
  id: string,
  text: string,
  type: string,
  value: string,
  autocomplete: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputComponent: React.FC<InputProps> = ({ autocomplete, id, text, type, value, onChange }) => {
  return(
    <input id={id} type={type} value={value} onChange={onChange} autoComplete={autocomplete} placeholder={text} required minLength={11} />
  )
}

export default InputComponent;