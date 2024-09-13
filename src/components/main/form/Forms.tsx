import React, { useState } from "react";
import "./Forms.css";
import LabelComponent from "./LabelComponent";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtoComponent";

const Forms: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  }
  return (
    <form className="containerForms" action="contact" method="post" data-netlify="true" onSubmit={e => {
      e.preventDefault();
    }}>
      <LabelComponent htmlFor="input1" text="Nome" />
      <InputComponent id="input1" type="text" value={name} onChange={handleNameChange}/>
      <LabelComponent htmlFor="input2" text="E-mail" />
      <InputComponent id="input2" type="email" value={email} onChange={handleEmailChange}/>
      <LabelComponent htmlFor="input3" text="Telefone" />
      <InputComponent id="input3" type="tel" value={phone} onChange={handlePhoneChange}/>
      <ButtonComponent type="submit" text="Enviar" />
    </form>
  )
}

export default Forms;