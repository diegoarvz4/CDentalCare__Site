import React from 'react';
import './Services.scss';

import padImg from '../../assets/img/pads.svg';
import specialtyImg from '../../assets/img/especialidades.svg';
import labImg from '../../assets/img/laboratorio.svg';

const Services = () => {

  const services = [
    {
      img: padImg,
      title: 'Pad'
    },
    {
      img: specialtyImg,
      title: 'Especialidades'
    },
    {
      img: labImg,
      title: 'Laboratorios'
    }
  ]

  return (
    <div className="Services">
      <h2 className="Secondary-Title">Servicios</h2>
      <div className="Services__List">

        {
          services.map((service, idx) => (
            <div key={idx} className="Services__List-item">
              <img src={service.img} alt="Pad"/>
              <h3 className="Subtitle">{service.title}</h3>
            </div>
          ))
        }
      </div>
    </div> 
  )
}

export default Services;
