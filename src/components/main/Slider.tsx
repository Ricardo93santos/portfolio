import React from "react";
import { technologies } from "./DadaTechnologies";
import "./Slider.css";

const Slider: React.FC = () => {

  type TechnologiesProps = {
    src: string;
    alt: string;
  };

  const listTechnologies = technologies.map((techtnologies: TechnologiesProps, index) => (
    <li className="sliderlItens" style={{
      ['--quantity' as any]: `${technologies.length}`,
      ['--delay' as any]: `${index}s` 
      }} key={index}>
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