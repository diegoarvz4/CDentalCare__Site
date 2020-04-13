import React from 'react';
import './Service.scss'

export default ( { title, description }) => {
  return (
    <div className="Service">
      <h2 className="Tertiary-Title">{title}</h2>
      <p className="Secondary-Description">{description}</p>
    </div>
  )
}