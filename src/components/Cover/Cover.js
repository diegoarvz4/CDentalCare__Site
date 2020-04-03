import React from 'react';
import Branches from './Branches/Branches';
import './Cover.scss';

import Carousel from '../Carousel/Carousel';
import CoverMessage from './CoverMessage/CoverMessage';

import locationImg from '../../assets/img/location.svg';
import phoneImg from '../../assets/img/phone.svg';
import shareImg from '../../assets/img/share.svg';
import dentistImg from '../../assets/photos/dentists.jpg';

const Cover = () => {

  const carouselItems = [
    {
      id: 1,
      img_url: 'https://image.shutterstock.com/image-vector/promotion-square-sticker-sign-banner-260nw-1427755229.jpg',
      description: '',
      priority: 1,
    },
    {
      id: 2,
      img_url: 'https://image.shutterstock.com/image-vector/banner-special-promotion-260nw-753306772.jpg',
      description: '',
      priority: 2,
    }
  ]

  const style = {
    backgroundImage: `url(${''})`,
  }
  return (
    <header 
      className="Cover" 
      style={style}
    >
      <Carousel items={carouselItems} />
      {/* <img className="Cover__Img" src={dentistImg} alt="CDental Care" /> */}
      <Branches 
        locationImg={locationImg} 
        phoneImg={phoneImg} 
        shareImg={shareImg} 
      />      
    </header>
  ) 
}

export default Cover;
