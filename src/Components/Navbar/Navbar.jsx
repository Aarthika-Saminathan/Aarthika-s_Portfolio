import React, { useState, useRef } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <h1><b>Aarthika</b></h1>
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className="nav-mob-open" />
      
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
        
        {['home', 'about', 'certifications','experience', 'projects', 'contact'].map((item) => (
          <li key={item}>
            <AnchorLink className="anchor-link" offset={50} href={`#${item}`} onClick={() => setMenu(item)}>
              <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p>
            </AnchorLink>
            {menu === item && <img src={underline} alt="Underline" />}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
  <a 
    className="anchor-link" 
    href="https://github.com/Aarthika-Saminathan?tab=repositories" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Github
  </a>
</div>

    </nav>
  );
};

export default Navbar;
