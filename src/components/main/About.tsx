import React from "react";
import Slider from "./Slider"
import "../../style/About.css";

const About: React.FC = () => {
  return (
    <section className="container about">
      <div className="about_text">
        <h2>Me conheça</h2>
        <p>Sou formado em Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web focado no front-end.</p>
        <p>Meu objetivo é transformar ideias em interfaces intuitivas e funcionais, sempre buscando proporcionar a melhor experiência para o usuário.</p>        
      </div>
      <Slider />
    </section>
  );
}

export default About;
