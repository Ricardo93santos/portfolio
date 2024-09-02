import React from "react";
import './main.css';
import Contato from "./Contato";
import Home from "./Home";
import Projetos from "./Projetos";
import Sobre from "./Sobre";

export default function Main(){
  return(
    <main>
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
    </main>
  )
}