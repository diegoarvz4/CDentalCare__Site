import React from 'react';
import Service from '../../components/Service/Service';
export default () => {

  const specialties = [
    {
      id: 1,
      title: 'Odontopediatría',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia consectetur non, repudiandae atque reprehenderit! A neque id ratione porro illum sed maxime vitae, temporibus commodi libero esse rem cum?
      Impedit quos quod itaque nostrum architecto aperiam est eaque excepturi vero quia ?`
    },
    {
      id: 2,
      title: 'Implantología',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia consectetur non, repudiandae atque reprehenderit! A neque id ratione porro illum sed maxime vitae, temporibus commodi libero esse rem cum?
      Impedit quos quod itaque nostrum architecto aperiam est eaque excepturi vero quia ?`
    },
  ]

  return (
    <div>
      <h1 className="Secondary-Title">Especialidades</h1>
      {
        specialties.map(specialty => (
          <Service 
            key={specialty.id} 
            title={specialty.title} 
            description={specialty.description}
          />
        ))
      }
    </div>
  )    
}