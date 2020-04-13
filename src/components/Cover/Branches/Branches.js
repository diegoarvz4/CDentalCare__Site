import React, { useState } from 'react';

const Branches = ( {locationImg, phoneImg, shareImg } ) => {
  
  const [branches, setBranches] = useState([
    {
      name: 'Palmas',
      address: `Avenida Morelos sur, número 88
      Loc. 1, Plaza Palmas, Colonia las Palmas
      Cuernavaca, Morelos.`,
      phone: '000-000-000'
    },
    {
      name: 'Cuarteles',
      address: `Av. Domingo Diez, número 1589
      Loc. 11, Plaza Corporativa, Colonia el Empleado
      Cuernavaca, Morelos.`,
      phone: '111-111-111'
    },
    {
      name: 'Jiutepec',
      address: `Calle Tamaulipas, número 5,
      Colonia Otilio Montaño
      Jiutepec, Morelos.`,
      phone: '222-222-222'
    },
    {
      name: 'Cuautla',
      address: `Antigua Carretera a Cuautla, número 6
      Loc. 19, Plaza Cinemundo, Colonia Miguel Hidalgo
      Cuautla, Morelos.`,
      phone: '333-333-333'
    },
    {
      name: 'Temixco',
      address: `Avenida Emiliano Zapata, número 148
      Colonia Centro Temixco, Morelos. `,
      phone: '444-444-444'
    }

  ]);


  const [branch, setBranch] = useState(branches[0])
  
  const setBranchObject = (e) => {
    const branchSelector = document.getElementById('branchSelector');
    setBranch({
      name: branchSelector.options[branchSelector.selectedIndex].text,
      phone: e.target.value
    })
  }
  
  return (
    <div className="Branches">
      <h2 className="Secondary-Title">Clínicas</h2>
      <span className="Alert-Title">Call Center YYY-YYYY-YYY</span>
      <div className="Branches__Selector">
        <div className="Branches__Selector-Input">
          <img src={locationImg} alt="Location"/>
          <select id='branchSelector' onChange={ setBranchObject }>
            {
              branches.map((branch, idx) => (
                <option key={idx} value={branch.phone}>
                  {branch.name}
                </option>
              ))
            }
          </select>
        </div>
        <div className="Branches__Selector-Output">
          <img src={phoneImg} alt="Phone" />
          <span>{branch.phone}</span>
          <img src={shareImg} alt="Share" />
        </div>
      </div>
      <button className="btn">
        Ver Detalle
      </button>
    </div>
  )
};

export default Branches;
