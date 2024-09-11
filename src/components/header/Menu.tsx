import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { Icon } from '@iconify-icon/react';

interface MenuProps {
  expanded: boolean;
}

const Menu: React.FC<MenuProps> = ({ expanded }) => {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink className="navLink" to="/">
            {expanded ? <><Icon className="icon" icon="line-md:home-twotone" /> <p>Home</p></> : <Icon className="icon" icon="line-md:home-twotone" />}
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/about">
            {expanded ? <><Icon className="icon" icon="line-md:person-twotone" /> <p>About</p></> : <Icon className="icon" icon="line-md:person-twotone" />}
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/projects">
            {expanded ? <><Icon className="icon" icon="line-md:check-list-3-twotone" /> <p>Projects</p></> : <Icon className="icon" icon="line-md:check-list-3-twotone" />}
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/contact">
            {expanded ? <><Icon className="icon" icon="line-md:email-check-twotone" /> <p>Contact</p></> : <Icon className="icon" icon="line-md:email-check-twotone" />}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
