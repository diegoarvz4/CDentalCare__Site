import React, { useState } from 'react';

export default () => {

  const [branch] = useState({
    address: 'Avenida Morelos sur, número 88 Loc. 1, Plaza Palmas, Colonia las Palmas Cuernavaca, Morelos.',
    name: 'PALMAS'
  });

  return (
    <div className="BranchView">
      <h1 className="Primary-Title">{`Clinica ${branch.name}`}</h1>
      
    </div>
  )
}