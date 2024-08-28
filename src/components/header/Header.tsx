import React, { useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer"
import './Header.css';
import slogan from "./slogan.png";
import logo from "./logo.png";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(true);

  return(
    <header className={`header ${expanded ? 'expanded' : 'collapsed'}`}
    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)}
    >
      <a href="#home">
        <img className={`${expanded ? 'logo': 'slogan'}`} src={expanded ? slogan : logo} alt="Logo" />
      </a>
      <Menu expanded={expanded}/>
      <Footer expanded={expanded}/>
    </header>
  )
}

export default Header;