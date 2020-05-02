import React from 'react';
import Carousel from '../Carousel/Carousel';

export default () => {

  const carouselItems = [
    {
      id: 1,
      img_url: 'https://italiannis.com.mx/wp-content/uploads/2019/08/promociones-boun-giorno-new-italiannis.jpg',
      description: '',
      priority: 1,
    },
    {
      id: 2,
      img_url: 'https://pbs.twimg.com/media/EVHxPtEWoAIwtCB.jpg',
      description: '',
      priority: 2,
    },
    {
      id: 3,
      img_url: 'https://static.promodescuentos.com/pepperpdimages/threads/thread_full_screen/default/79695_1.jpg',
      description: '',
      priority: 3,
    },
    {
      id: 4,
      img_url: 'https://promociondescuentos.com/wp-content/uploads/2016/04/game-planet-descuento-juegos-ps4-1280x720.jpg',
      description: '',
      priority: 4,
    }
  ]

  const sortItemsByPriority = (items) => {
    return items.sort((a,b) => b.priority - a.priority)
  }


  return (
    <div id="benefits" className="Benefits">
      <h2 className="Secondary-Title">Beneficios para Socios CDental Care</h2>
      <div >
        <Carousel  items={sortItemsByPriority(carouselItems)} />
      </div>
    </div> 
  )
}