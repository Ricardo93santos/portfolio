import React from "react";
import "../../style/Forms.css";

const Forms: React.FC = () => {
  return (
    <form className="containerForms" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name">Nome</label>
      <input type="text" name="name" placeholder="Nome completo" />
      <label htmlFor="email">E-mail</label>
      <input type="email" name="email" placeholder="E-mail@email.com" />
      <label htmlFor="phone">Telefone ou WhatsApp</label>
      <input type="tel" name="phone" placeholder="(xx)9xxxx-xxxx" />
      <label htmlFor="mesage">Deixe sua mensagem</label>
      <textarea name="mesage" placeholder="Fique à vontade"></textarea>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default Forms;
