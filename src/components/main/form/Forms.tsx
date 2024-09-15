import React, { useState } from "react";
import "./Forms.css";
import LabelComponent from "./LabelComponent";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent"; // Verifique se o caminho está correto

const Forms: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, phone, message };

    try {
      const response = await fetch("/.netlify/functions/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <LabelComponent htmlFor="input1" text="Nome completo" />
      <InputComponent id="input1" type="text" text="Nome e Sobrenome" value={name} onChange={handleNameChange} autocomplete="name" />
      <LabelComponent htmlFor="input2" text="E-mail" />
      <InputComponent id="input2" type="email" text="seuemail@email.com" value={email} onChange={handleEmailChange} autocomplete="email" />
      <LabelComponent htmlFor="input3" text="WhatsApp" />
      <InputComponent id="input3" type="tel" text="(xxx)9xxxx-xxxx" value={phone} onChange={handlePhoneChange} autocomplete="tel" />
      <LabelComponent htmlFor="input4" text="Deixe sua mensagem" />
      <InputComponent id="input4" type="text" text="Vamos criar um site juntos!" value={message} onChange={handleMessageChange} autocomplete="off" />
      <ButtonComponent type="submit" text="Enviar" />
    </form>
  );
};

export default Forms;
