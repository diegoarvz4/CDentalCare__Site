import React from 'react';
import { Link } from 'react-router-dom';
import './Services.scss';

import padImg from '../../assets/img/pads.svg';
import specialtyImg from '../../assets/img/especialidades.svg';
import labImg from '../../assets/img/laboratorio.svg';

const Services = ( { scrollToTop } ) => {

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
    <div id="services" className="Services">
      <h2 className="Secondary-Title">Servicios</h2>
      <div className="Services__List">

        {
          services.map((service, idx) => (
            <Link 
              to={`/servicios/${service.title.toLowerCase()}`} 
              onClick={() => scrollToTop()}
              key={idx} className="Services__List-item">
              <img src={service.img} alt="Pad"/>
              <h3 className="Subtitle">{service.title}</h3>
            </Link>
          ))
        }
      </div>
    </div> 
  )
}

export default Services;
