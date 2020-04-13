import React, { useState, useEffect } from 'react';
import './Carousel.scss';

export default ({ items }) => {

  const [current, setCurrent] = useState(items[0])
  const [windowWidth] = useState(window.innerWidth);
  const [carouselWidth, setCarouselWidth] = useState(480)
  const [position, setPosition] = useState(0);
  const [carouselTransform, setCarouselTransform] = useState(
    {
      width: carouselWidth * items.length,
      transform: `translateX(${position}px)`
    }
  )


  useEffect(() => {
    if (windowWidth < 480) {
      setCarouselWidth(windowWidth)
    }
  },[windowWidth])

  useEffect(() => {
    setCarouselTransform((prevCarouselTransform) => {
      return {
        ...prevCarouselTransform,
        transform: `translateX(${position}px)`
      }
    });
  }, [position])


  const moveTo = (priority) => {
    const pxToSlide = (current.priority - priority) * -carouselWidth;
    setCurrent(items.filter(item => item.priority === priority)[0])
    setPosition(prevPosition =>  prevPosition + pxToSlide)
  }
  
  return (
    <div className="Carousel"
      style={{
        width: carouselWidth
      }}
    >
      <div className="Carousel__Rail"
        style={carouselTransform}
      > 
        {
          items.map(item => (
            <div
              key={item.id}
              className="Carousel__Rail__Item" 
              style={
                {
                  backgroundImage: `url(${item.img_url})`,
                  order: `${item.priority}`,
                  width: carouselWidth
                }
              } 
            />
          ))
        }     
      </div>
      <span 
        className="Carousel__Rail__Arrow Carousel__Rail__Arrow--left"
        onClick={() => {
            const tempPriority = current.priority + 1
            if (tempPriority > items.length) {
              return
            } 
            moveTo(tempPriority)
          }
        }
      >
        {'<'}
      </span>
      <span 
        className="Carousel__Rail__Arrow Carousel__Rail__Arrow--right"
        onClick={() => {
            const tempPriority = current.priority - 1
            if (tempPriority <= 0) {
              return
            } 
            moveTo(tempPriority)
          }
        }
      >
        {'>'}
      </span>
      
      <div className="Carousel__DotsContainer">
        {
          items.map( item => (
            <span
              key={item.id}
              style={{
                backgroundColor: item.priority === current.priority ? '#3776e3' : '#183464'
              }} 
              className="Carousel__DotsContainer__Dot" 
              onClick={() => moveTo(item.priority)} 
            />
          ))
        }
      </div>
    </div>
  )
}