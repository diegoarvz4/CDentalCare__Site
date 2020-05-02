import React from 'react';
import * as styles from './MedicalStaffMember.module.scss';
import emailImg from '../../assets/img/email.svg';


export default ( { profession, name, email, graduate, license }) => {
  return (
    <div className={`${styles.MedicalStaffMember} fadeIn`}>
      <h3>{profession}</h3>
      <h2>{name}</h2>
      <h4>Egresado(a) de {graduate}</h4>
      <h4>Cédula Profesional: {license}</h4>
      <div className={styles.Email}>
        <img src={emailImg} alt="Email"/>
        <span>{email}</span>
      </div>
    </div>
  )
}