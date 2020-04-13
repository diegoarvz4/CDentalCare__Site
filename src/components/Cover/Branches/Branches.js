import React, { useState } from 'react';

const Branches = ( {locationImg, phoneImg, shareImg } ) => {
  
  const [branches, setBranches] = useState([
    {Cuernavaca: '555555'},
    {Puebla: '22222'},
    {Querétaro: '44444'},
  ]);

  const [branch, setBranch] = useState('')
  
  
  return (
    <div className="Branches">
      <h2 className="Secondary-Title">Seleccione Sucursal</h2>
      <div className="Branches__Selector">
        <div className="Branches__Selector-Input">
          <img src={locationImg} alt="Location"/>
          <select onChange={(e) => setBranch(e.target.value)}>
            {
              branches.map((branch, idx) => (
                <option key={idx} value={Object.values(branch)[0]}>
                  {Object.keys(branch)[0]}
                </option>
              ))
            }
          </select>
        </div>
        <div className="Branches__Selector-Output">
          <img src={phoneImg} alt="Phone" />
          <span>{branch !== '' ? branch : Object.values(branches[0])[0]}</span>
          <img src={shareImg} alt="Share" />
        </div>
      </div>
      <button className="btn">Ver Detalle</button>
    </div>
  )
};

export default Branches;
