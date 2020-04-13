import React from 'react';
import { Link } from 'react-router-dom';
import './Directories.scss';

import adminImg from '../../assets/img/directory-admin.svg';
import medicalImg from '../../assets/img/directory-medical.svg';

const Directories = ( { scrollToTop }) => {

  const directories = [
    {
      img: adminImg,
      title: 'Directorio Administrativo',
      url: 'administracion',
    },
    {
      img: medicalImg,
      title: 'Directorio Médico',
      url: 'personal_medico'
    },
  ]

  return (
    <div className="Directories">
      <h2 className="Secondary-Title">Directorios</h2>
      <div className="Directories__List">

        {
          directories.map((directory, idx) => (
            <Link
              to={`/directorios/${directory.url}`} 
              onClick={() => scrollToTop()}
              key={idx} 
              className="Directories__List-item"
            >
              <img src={directory.img} alt="Directory"/>
              <h3 className="Subtitle">{directory.title}</h3>
            </Link>
          ))
        }
      </div>
    </div> 
  )
}

export default Directories;
