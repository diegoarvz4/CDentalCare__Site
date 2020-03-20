import React from 'react';
import Branches from './Branches/Branches';
import backgroundCover from '../../assets/photos/dentist.jpg';
import './Cover.scss';

import CoverMessage from './CoverMessage/CoverMessage';

import locationImg from '../../assets/img/location.svg';
import phoneImg from '../../assets/img/phone.svg';
import shareImg from '../../assets/img/share.svg';

const Cover = () => {


  const style = {
    backgroundImage: `url(${""})`,
  }
  return (
    <header 
      className="Cover" 
      style={style}
    >
      <CoverMessage />
      <Branches 
        locationImg={locationImg} 
        phoneImg={phoneImg} 
        shareImg={shareImg} 
      />      
    </header>
  ) 
}

export default Cover;
