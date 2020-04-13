import React from 'react';
import Service from '../../components/Service/Service';
export default () => {

  const laboratories = [
    {
      id: 1,
      title: 'Protesis Dental',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia consectetur non, repudiandae atque reprehenderit! A neque id ratione porro illum sed maxime vitae, temporibus commodi libero esse rem cum?
      Impedit quos quod itaque nostrum architecto aperiam est eaque excepturi vero quia ?`
    },
    {
      id: 2,
      title: 'Ortopedia',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia consectetur non, repudiandae atque reprehenderit! A neque id ratione porro illum sed maxime vitae, temporibus commodi libero esse rem cum?
      Impedit quos quod itaque nostrum architecto aperiam est eaque excepturi vero quia ?`
    },
  ]

  return (
    <div>
      <h1 className="Secondary-Title">Laboratorios</h1>
      {
        laboratories.map(laboratory => (
          <Service 
            key={laboratory.id} 
            title={laboratory.title} 
            description={laboratory.description}
          />
        ))
      }
    </div>
  )    
}