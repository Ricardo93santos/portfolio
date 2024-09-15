import React from "react";
import { Icon } from '@iconify-icon/react';
import '../../style/Footer.css';

interface FooterProps{
  expanded: boolean;
}

const Footer: React.FC<FooterProps> = ({ expanded }) => {
  return(
    <footer>
      <ul className={expanded ? 'FooterExpanded' : 'FooterCollapsed'}>
        <li>
          <a href="https://github.com/Ricardo93santos" target="_blank" rel="noopener noreferrer">
          <Icon icon="mdi:github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/ricardo-santos-997429145/" target="_blank" rel="noopener noreferrer">
            <Icon icon="mdi:linkedin" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5577933016666" target="_blank" rel="noopener noreferrer">
            <Icon icon="ic:baseline-whatsapp" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer