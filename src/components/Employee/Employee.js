import React from 'react';
import './Employee.scss';
import emailImg from '../../assets/img/email.svg';
import phoneImg from '../../assets/img/phone.svg';


export default ( { attribute, name, email }) => {
  return (
    <div className="Employee">
      <h3 className="Employee__Occupation">{attribute}</h3>
      <h2 className="Employee__Name">{name}</h2>
      <div className="Employee__Email">
        <img src={emailImg} alt="Email"/>
        <span>{email}</span>
      </div>
    </div>
  )
}