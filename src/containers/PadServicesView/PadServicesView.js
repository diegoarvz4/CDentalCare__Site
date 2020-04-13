import React from 'react';
import Service from '../../components/Service/Service';

export default () => {

  const services = [
    {
      id: 1,
      title: 'Básico',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia consectetur non, repudiandae atque reprehenderit! A neque id ratione porro illum sed maxime vitae, temporibus commodi libero esse rem cum?
      Impedit quos quod itaque nostrum architecto aperiam est eaque excepturi vero quia ?`
    },
    {
      id: 2,
      title: 'Familiar',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia consectetur non, repudiandae atque reprehenderit! A neque id ratione porro illum sed maxime vitae, temporibus commodi libero esse rem cum?
      Impedit quos quod itaque nostrum architecto aperiam est eaque excepturi vero quia ?`
    },
  ]

  return (
    <div>
      <h1 className="Secondary-Title">Pad</h1>
      {
        services.map(service => (
          <Service 
            key={service.id} 
            title={service.title} 
            description={service.description}
          />
        ))
      }
    </div>
  )
}