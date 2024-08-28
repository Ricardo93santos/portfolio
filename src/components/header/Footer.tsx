import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

interface FooterProps{
  expanded: boolean;
}

const Footer: React.FC<FooterProps> = ({ expanded }) => {
  return(
    <footer>
      <ul className={expanded ? 'FooterExpanded' : 'FooterCollapsed'}>
        <li>
          <a href="https://github.com/Ricardo93santos" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li><a href="https://www.linkedin.com/in/ricardo-santos-997429145/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
          </a></li>
        <li><a href="https://wa.me/5577933016666" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} /></a></li>
      </ul>
    </footer>
  )
}

export default Footer