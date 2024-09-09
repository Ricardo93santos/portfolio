import React from "react";
import Carousel from "./Slider"
import './About.css';

const About: React.FC = () => {
  return (
    <section className="container about">
      <div className="about_text">
        <h2>Me conheça</h2>
        <p>Sou formado em Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web focado no front-end. Minha paixão é transformar ideias em interfaces intuitivas e funcionais, sempre buscando a melhor experiência para o usuário.</p>
      </div>
      <Slider />
    </section>
  );
}

export default About;
