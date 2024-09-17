import React, { useEffect, useState, useRef } from "react";
import '../../style/Cards.css';
import LinksProjects from "./LinksProjects";
import TechnologiesCards from "./TechnologiesCards";
import ThumbProjects from "./ThumbProjects";
import { projects, Project } from "./Dada";
import { motion } from "framer-motion";

const Cards: React.FC = () => {

  const carousel = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;

      setWidth(scrollWidth - offsetWidth);
      carousel.current.scrollLeft = 100;
    }
  }, []);

  return (
    <motion.div ref={carousel} className="carouselCards" whileTap={{ cursor: "grabbing" }} >
      <motion.div 
        className="containerCards"
        drag="x"
        dragConstraints={{ right: 610, left: -width }}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8 }}
        >
        {projects.map((project: Project, index) => (
          <motion.div key={index} className="card">
            <ThumbProjects src={project.src} alt={project.alt}/>
            <LinksProjects link={project.link}/>
            <TechnologiesCards technologies={project.technologies}/>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Cards;
