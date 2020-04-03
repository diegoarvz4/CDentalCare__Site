import React from 'react';
import './Carousel.scss';

export default ({ items }) => {

  console.log(items[0].img_url)

  return (
    <div className="Carousel">
      <div className="Carousel__Rail">
        {
          items.map(item => (
            <div
              className="Carousel__Rail__Item" 
              key={item.id}
              style={
                {
                  backgroundImage: `url(${item.img_url})`
                }
              } 
            />
          ))
        }
        <span className="Carousel__Rail__Arrow Carousel__Rail__Arrow--left">{'<'}</span>
        <span className="Carousel__Rail__Arrow Carousel__Rail__Arrow--right">{'>'}</span>
      </div>
      
      <div className="Carousel__DotsContainer">
        {
          items.map( _ => (
            <span className="Carousel__DotsContainer__Dot"></span>
          ))
        }
      </div>
    </div>
  )
}