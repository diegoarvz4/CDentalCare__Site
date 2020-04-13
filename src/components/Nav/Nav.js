import React from 'react';
import hamMenuIcon from '../../assets/img/ham-menu.svg';
import './Nav.scss';
import navLogoImg from '../../assets/img/CDC_logo02.png';

export default ( { setSideNav }) => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <img 
            className="Nav__list-item--logo" 
            src={navLogoImg} 
            alt="CDental Care"
          />
        </li>
        <li className="Nav__list-item">
          <img 
            className="Nav__menu-img" 
            src={hamMenuIcon} alt="menu" 
            onClick={() => {
              setSideNav();
            }} 
          />
        </li>
      </ul>
    </nav>
  )
}