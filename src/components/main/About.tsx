import React from "react";
import Slider from "./Slider"
import "../../style/About.css";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  return (
    <section className="container about">
      <Slider />
      <div className="about_text">
        <p>Analista e desenvolvedor de sistemas especializado em desenvolvimento web, com foco no front-end.</p>
        <p>Trabalho com startups, projetos freelance e outras iniciativas, sempre me capacitando e atualizando para entregar sistemas web modernos e funcionais. Meu objetivo é transformar ideias em interfaces intuitivas, sempre buscando proporcionar a melhor experiência para o usuário.</p>        
        <p>Se você procura alguém comprometido e entusiasmado para criar soluções incríveis, <Link className="WaLink" to="https://wa.me/+5577933016666?text=Olá%20Ricardo,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!%20Vamos%20criar%20um%20site?" target="_blank" rel="noopener noreferrer">vamos conversar!</Link></p>        
      </div>
    </section>
  );
}

export default About;
