import React from "react";
import Contato from "./Contato";
import Home from "./Home";
import Projetos from "./Projetos";
import Sobre from "./Sobre";

export default function Main(){
  return(
    <div>
      <h1>Sou o main e vou conter as sections Home, sobre, projetos e contatos!</h1>
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  )
}