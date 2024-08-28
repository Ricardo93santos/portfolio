import React from "react";
import Menu from "./Menu";
import logo from "../../img/logo.png"

export default function Header(){
  return(
    <div className="header">
      <a href="#home" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <Menu />
    </div>
  )
}