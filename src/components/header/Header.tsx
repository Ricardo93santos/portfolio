import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import './header.css';
import slogan from "./slogan.png";
import logo from "./logo.png";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={`header ${expanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <Link to="/">
        <img className={`${expanded ? 'logo' : 'slogan'}`} src={expanded ? slogan : logo} alt="Logo" />
      </Link>
      <Menu expanded={expanded} />
      <Footer expanded={expanded} />
    </header>
  );
}

export default Header;
