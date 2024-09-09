import React, { useEffect, useState } from "react";
import { technologies } from "./DadaTechnologies";
import "./Slider.css";

const Slider: React.FC = () => {

  const [filteredTechnologies, setFilteredTechnologies] = useState<TechnologiesProps[]>([]);

  type TechnologiesProps = {
    src: string;
    alt: string;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setFilteredTechnologies(technologies);
      } else {
        setFilteredTechnologies(technologies.slice(0, 6));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Chama a função uma vez para definir o estado inicial

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const listTechnologies = filteredTechnologies.map((techtnologies: TechnologiesProps, index) => (
    <li className="sliderlItens" style={{animationDelay: `${index * 1.4}s`}} key={index}>
      <img src={techtnologies.src} alt={techtnologies.alt} />
    </li>
  ));

  return (
    <div className="containerSlider">
      <ul className="slider">{listTechnologies}</ul>
    </div>
  )
}

export default Slider;