import React, { useState } from 'react';
import backgroundCover from '../../assets/photos/dentist.jpg';
import './Cover.scss';

const Cover = () => {

  const [branches, setBranches] = useState([
    'Cuernavaca',
    'Puebla',
    'Querétaro',
  ]);

  const [branch, setBranch] = useState('')

  const style = {
    backgroundImage: `url(${backgroundCover})`,
  }
  return (
    <header 
      className="Cover" 
      style={style}
    >
      <div className="Cover__Title">
        <h1>Expertos en el cuidado dental</h1>
      </div>
      <div className="Branches">
        <h2>Seleccione Sucursal</h2>
        <div className="Branches__Selector">
          <div>
            <img />
            <select onChange={(e) => setBranch(e.target.value)}>
              {
                branches.map((branch, idx) => (
                  <option key={idx} value={branch}>
                    {branch}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>

    </header>
  ) 
}

export default Cover;
