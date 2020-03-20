import React from 'react';
import './SideMenu.scss';

import logoImg from '../../assets/img/CDC_logo02.png';
import servicesImg from '../../assets/img/services.svg';
import directoriesImg from '../../assets/img/directorios.svg';
import agreementsImg from '../../assets/img/convenios.svg';
import insuranceImg from '../../assets/img/red-seguros.svg';

import facebookImg from '../../assets/img/facebook.svg';
import twitterImg from '../../assets/img/twitter.svg';

const SideMenu = () => {
  
  const menuItems = [
    {
      img: servicesImg,
      title: 'Servicios',
    },
    {
      img: directoriesImg,
      title: 'Directorio',
    },
    {
      img: agreementsImg,
      title: 'Convenios',
    },
    {
      img: insuranceImg,
      title: 'Red de seguros',
    }
  ]

  const socialItems = [
    {
      img: facebookImg,
      title: '/DentalCare'
    },
    {
      img: twitterImg,
      title: '@DentalCare'
    }
  ]

  return (
    <div className="SideMenu">
      <div className="SideMenu__Menu">
        <img className="SideMenu__Logo" src={logoImg} alt="Logo" />
        <hr /> 
        {
          menuItems.map((item, idx) => (
            <div key={idx} className="SideMenu__Item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))
        }
        <hr />
        {
          socialItems.map((item, idx) => (
            <div key={idx} className="SideMenu__Item">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))
        } 
      </div>
    </div>
  )
}

export default SideMenu;
