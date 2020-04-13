import React from 'react';
import Branches from './Branches/Branches';
import './Cover.scss';

import Carousel from '../Carousel/Carousel';

import locationImg from '../../assets/img/location.svg';
import phoneImg from '../../assets/img/phone.svg';
import shareImg from '../../assets/img/share.svg';

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
    },
    {
      id: 3,
      img_url: 'https://images.clarin.com/2019/10/04/the-legend-of-zelda-link___6IpsPC-f_1200x630__1.jpg',
      description: '',
      priority: 3,
    },
    {
      id: 4,
      img_url: 'https://media.vandal.net/i/1200x630/3-2020/20203171149312_1.jpg',
      description: '',
      priority: 4,
    }
  ]

  const sortItemsByPriority = (items) => {
    return items.sort((a,b) => b.priority - a.priority)
  }

  const style = {
    backgroundImage: `url(${''})`,
  }
  return (
    <header 
      className="Cover" 
      style={style}
    >
      <Carousel items={sortItemsByPriority(carouselItems)} />
      <Branches 
        locationImg={locationImg} 
        phoneImg={phoneImg} 
        shareImg={shareImg} 
      />      
    </header>
  ) 
}

export default Cover;
