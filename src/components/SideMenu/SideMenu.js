import React from 'react';
import { Link } from 'react-router-dom';
import './SideMenu.scss';

import homeWhiteImg from '../../assets/img/icons_white/home_white.svg';

import servicesImg from '../../assets/img/icons_white/services_white.svg';
import directoriesImg from '../../assets/img/icons_white/directorios_white.svg';
import agreementsImg from '../../assets/img/icons_white/convenios_white.svg';
import insuranceImg from '../../assets/img/icons_white/red-seguros_white.svg';


const SideMenu = ( { setSideNav }) => {
  
  const menuItems = [
    {
      img: homeWhiteImg,
      title: 'Inicio',
      url: '#'
    },
    {
      img: servicesImg,
      title: 'Servicios',
      url: '#services'
    },
    {
      img: directoriesImg,
      title: 'Directorio',
      url: '#directories'
    },
    {
      img: agreementsImg,
      title: 'Beneficios',
      url: '#benefits'
    },
  ]

  return (
    <div className="SideMenu">
      <div className="SideMenu__Menu">
        {
          menuItems.map((item, idx) => (
            <a 
              href={item.url}
              onClick={setSideNav}
              key={idx} 
              className="SideMenu__Item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </a>
          ))
        }
        <hr />
          <a 
            href={'/'}
            onClick={setSideNav}
            className="SideMenu__Item">
            <img src={insuranceImg} alt="" />
            <h3>Red de Seguros</h3>
          </a>
      </div>
    </div>
  )
}

export default SideMenu;
