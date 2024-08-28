import React from "react";
import Menu from "./Menu";
import Footer from "./Footer"
import './header.css';
import logo from "./logo.png";

export default function Header(){
  return(
    <header className="header">
      <a href="#home">
        <img className="logo" src={logo} alt="Logo" />
      </a>
      <Menu />
      <Footer />
    </header>
  )
}