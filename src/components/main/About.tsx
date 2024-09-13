import React from "react";
import Slider from "./Slider"
import './About.css';

const About: React.FC = () => {
  return (
    <section className="container about">
      <div className="about_text">
        <h2>Me conheça</h2>
        <p>Sou formado em Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web focado no front-end. </p>
        <p>Minha paixão é transformar ideias em interfaces intuitivas e funcionais, sempre buscando a melhor experiência para o usuário.</p>
        <p>Tenho experiência no desenvolvimento de sistemas web, tanto como freelancer quanto em projetos pessoais, utilizando as linguagens e frameworks mais modernos.</p>
      </div>
      <Slider />
    </section>
  );
}

export default About;
