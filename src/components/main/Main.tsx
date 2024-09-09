import React from "react";
import './main.css';
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

const Main: React.FC = () => {
  return(
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default Main;