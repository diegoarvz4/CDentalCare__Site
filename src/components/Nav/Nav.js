import React from 'react';
import hamMenuIcon from '../../assets/img/ham-menu.svg';
import './Nav.scss';

export default () => {
  return (
    <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__list-item">
          <img className="Nav__menu-img" src={hamMenuIcon} alt="menu" />
        </li>
      </ul>
    </nav>
  )
}