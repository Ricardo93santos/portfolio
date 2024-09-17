  import React from "react";
import '../../style/Cards.css';
import LinksProjects from "./LinksProjects";
import TechnologiesCards from "./TechnologiesCards";
import ThumbProjects from "./ThumbProjects";
import { projects, Project } from "./Dada";

const Cards: React.FC = () => {

  return (
    <div className="containerCards">
      {projects.map((project: Project, index) => (
        <div key={index} className="card">
          <ThumbProjects src={project.src} alt={project.alt}/>
          <LinksProjects link={project.link}/>
          <TechnologiesCards technologies={project.technologies}/>
        </div>
      ))}
    </div>
  );
};

export default Cards;
