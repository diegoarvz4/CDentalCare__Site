import React from 'react';
import Branches from './Branches/Branches';
import './Cover.scss';

import CoverMessage from './CoverMessage/CoverMessage';

import locationImg from '../../assets/img/location.svg';
import phoneImg from '../../assets/img/phone.svg';
import shareImg from '../../assets/img/share.svg';
import dentistImg from '../../assets/photos/dentists.jpg';

const Cover = () => {
  const style = {
    backgroundImage: `url(${''})`,
  }
  return (
    <header 
      className="Cover" 
      style={style}
    >
      <CoverMessage />
      <img className="Cover__Img" src={dentistImg} alt="CDental Care" />
      <Branches 
        locationImg={locationImg} 
        phoneImg={phoneImg} 
        shareImg={shareImg} 
      />      
    </header>
  ) 
}

export default Cover;
