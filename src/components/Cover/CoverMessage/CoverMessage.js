import React from 'react';


const CoverMessage = () => { 
  const title = 'Expertos en tu salud dental'
  const msg = `
  En CDental Care ofrecemos los mejores beneficios
  para tu salud dental. Contamos con expertos profesionales
  con más de 20 años de experiencia que garantizan
  la excelencia de nuestro servicio.
  `;

  return (
    <div className="Cover__Message">
      <h1 className="Primary-Title">{title}</h1>
      <p className="Description">
        {msg}
      </p>
    </div>
  )
}

export default CoverMessage;
