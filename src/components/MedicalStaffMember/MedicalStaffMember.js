import React from 'react';
import '../Employee/Employee.scss'
import emailImg from '../../assets/img/email.svg';


export default ( { profession, name, email, graduate, license }) => {
  return (
    <div className="Employee">
      <h3 className="Employee__Occupation">{profession}</h3>
      <h2 className="Employee__Name">{name}</h2>
      <h3 className="Employee__Occupation">Egresado(a) de {graduate}</h3>
      <h3 className="Employee__Occupation">Cédula Profesional: {license}</h3>
      <div className="Employee__Email">
        <img src={emailImg} alt="Email"/>
        <span>{email}</span>
      </div>
    </div>
  )
}