import React from "react";
import "../../style/Forms.css";

const Forms: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <form className="containerForms" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" placeholder="Nome completo" />
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" placeholder="E-mail@email.com" />
      <label htmlFor="phone">Telefone ou WhatsApp</label>
      <input type="tel" name="phone" placeholder="(xx)9xxxx-xxxx" />
      <label htmlFor="message">Deixe sua mensagem</label>
      <textarea name="message" placeholder="Fique à vontade"></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Forms;
