import React from "react";
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="container">
      <div className="home_text">
        <h1>Bem-vindo a um novo universo digital!</h1>
        <h2>Eu sou Ricardo Santos</h2>
        <p>Transformo suas ideias em soluções web que fazem a diferença.</p>
        <p>Entre em contato e vamos começar!</p>
        <div className="home_contact">
          <a href="https://wa.me/+5577933016666?text=Olá%20Ricardo,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!%20Vamos%20criar%20um%20site?" target="_blank" rel="noopener noreferrer">
            <button className="whatsappButton" aria-label="Fale Conosco no WhatsApp">Fale Conosco no WhatsApp</button>
          </a>
          <p>ou</p>
          <a href="./contact">
            <button className="contactButton" aria-label="Preencha o Formulário de Contato">Preencha o Formulário</button>
          </a>
        </div>
      </div>
      <img className="profileImage" src="https://media.licdn.com/dms/image/v2/D4D03AQHynDl0BNBfGQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686515034641?e=1730937600&v=beta&t=xFsr6H55cSsN2UjwDFvmqzDY8Pbjmydt1jWsDLGYvcA" alt="Foto do Perfil" />
    </section>
  );
}

export default Home;