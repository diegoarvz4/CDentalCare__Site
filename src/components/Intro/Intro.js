import React from 'react';
import './Intro.scss';
import logoImg from '../../assets/img/CDC_logo.png';

const Intro = () => {
  return (
    <div className="Intro">
      <img className="Intro__Img" src={logoImg} alt="Logo" />
    </div>
  ) 
}

export default Intro;