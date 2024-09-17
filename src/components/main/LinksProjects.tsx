import React from "react";
import "../../style/LinksProjects.css";

const LinksProjects: React.FC<{link: string}> = ({ link }) => {
  return (
    <div className="linkProject">
      {link ? <a href={link} target="_blank" rel="noopener noreferrer">Visite o Projeto</a> : "Em desenvolvimento"}
    </div>
  )
}

export default LinksProjects;