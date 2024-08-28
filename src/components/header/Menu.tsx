import React from "react";
import "./Menu.css"

interface MenuProps {
  expanded: boolean;
}

const Menu: React.FC<MenuProps> = ({ expanded }) => {
  return(
    <div>
      <ul className="menu">
        <li>
          <a href="#home">
            {expanded ? 'Home': ''}
          </a>
        </li>
        <li>
          <a href="#sobre">
            {expanded ? 'Sobre' : ''}
          </a>
        </li>
        <li>
          <a href="#projetos">
            {expanded ? 'Projetos' : ''}
          </a>
        </li>
        <li>
          <a href="#contato">
            {expanded ? 'Contato' : ''}
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Menu;