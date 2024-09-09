import React from "react";
import './About.css';

const About: React.FC = () => {
  const technologies = [
    { src: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000", alt: "JavaScript" },
    { src: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000", alt: "React" },
    { src: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000", alt: "TypeScript" },
    { src: "https://img.icons8.com/?size=100&id=EAUyKy3IwmqM&format=png&color=000000", alt: "HTML5" },
    { src: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000", alt: "CSS3" },
    { src: "https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000", alt: "PHP" },
    { src: "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000", alt: "MySQL" },
  ];

  const listTechnologies = technologies.map((technology, index) => (
    <li key={index}>
      <img src={technology.src} alt={technology.alt} />
    </li>
  ));

  return (
    <section className="container about">
      <div className="about_text">
        <h2>Me conheça</h2>
        <p>Sou formado em Análise e Desenvolvimento de Sistemas, com especialização em desenvolvimento web focado no front-end. Minha paixão é transformar ideias em interfaces intuitivas e funcionais, sempre buscando a melhor experiência para o usuário.</p>
      </div>
      <div className="technologies">
        <ul>{listTechnologies}</ul>
      </div>
    </section>
  );
}

export default About;
