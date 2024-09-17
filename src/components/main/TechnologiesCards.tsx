import React from "react";
import { technologies } from "./Dada";
import "../../style/TechnologiesCards.css";

const TechnologiesCards: React.FC<{ technologies: string[] }> = ({ technologies: techNames }) => {
  const techImages =techNames.map((techName) => {
    const tech = technologies.find(t => t.alt === techName);
    return tech ? <img key={tech.alt} src={tech.src} alt={tech.alt} /> : null;
  })
  return (
    <div className="technologiesCards">
      {techImages}
    </div>
  )
}

export default TechnologiesCards;