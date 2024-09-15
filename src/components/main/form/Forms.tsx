import React, { useState } from "react";
import "./Forms.css";
import LabelComponent from "./LabelComponent";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtoComponent";

const Forms: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mensage, setmensage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleMensageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setmensage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, phone, mensage };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="containerForms" onSubmit={handleSubmit}>
      <LabelComponent htmlFor="input1" text="Nome completo" />
      <InputComponent id="input1" type="text" text="Nome e Sobremone" value={name} onChange={handleNameChange} />
      <LabelComponent htmlFor="input2" text="E-mail" />
      <InputComponent id="input2" type="email" text="seuemail@email.com" value={email} onChange={handleEmailChange} />
      <LabelComponent htmlFor="input3" text="WhatsApp" />
      <InputComponent id="input3" type="tel" text="(xxx)9xxxx-xxxx" value={phone} onChange={handlePhoneChange} />
      <LabelComponent htmlFor="input4" text="Deixe sua mensagem" />
      <InputComponent id="input4" type="text" text="Vamos criar um site juntos!" value={mensage} onChange={handleMensageChange} />
      <ButtonComponent type="submit" text="Enviar" />
    </form>
  );
};

export default Forms;