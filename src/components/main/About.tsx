import React from "react";
import Slider from "./Slider"
import "../../style/About.css";

const About: React.FC = () => {
  return (
    <section className="container about">
      <div className="about_text">
        <p>Analista e desenvolvedor de sistemas especializado em desenvolvimento web, com foco no front-end. Transformo ideias em interfaces intuitivas e atraentes.</p>
        <p>Trabalho com startups, projetos freelance e outras iniciativas, sempre me capacitando e atualizando para entregar sistemas web modernos e funcionais. Meu objetivo é transformar ideias em interfaces intuitivas, sempre buscando proporcionar a melhor experiência para o usuário.</p>        
        <p>Se você procura alguém comprometido e entusiasmado para criar soluções incríveis, vamos conversar!</p>        
      </div>
      <Slider />
    </section>
  );
}

export default About;
