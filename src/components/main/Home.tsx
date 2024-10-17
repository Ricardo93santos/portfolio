import React from "react";
import "../../style/Home.css";
import ProfileImage from "./ProfileImage";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <section className="container">
      <div className="home_text">
        <h1>Bem-vindo a um novo universo digital!</h1>
        <h2>Eu sou Ricardo Santos</h2>
        <p>Transformo ideias em interfaces intuitivas e atraentes.</p>
        <div className="home_contact">
          <Link to="https://wa.me/+5577933016666?text=Olá%20Ricardo,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!%20Vamos%20conversar?" target="_blank" rel="noopener noreferrer">
            <button className="whatsappButton" aria-label="Me chama no WhatsApp">Me chama no WhatsApp</button>
          </Link>
          <Link to="/contact">
            <button className="contactButton" aria-label="Preencha o Formulário">Preencha o Formulário</button>
          </Link>
        </div>
      </div>
      <ProfileImage />
    </section>
  );
}

export default Home;