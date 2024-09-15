import React from "react";

const Forms: React.FC = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" placeholder="Nome completo" />
  <input type="email" name="email" placeholder="E-mail" />
  <input type="tel" name="phone" placeholder="WhatsApp" />
  <textarea name="message" placeholder="Deixe sua mensagem"></textarea>
  <button type="submit">Enviar</button>
</form>
  )
}

export default Forms;
