import React, { useState, useEffect } from 'react';

import MedicalStaffMember from '../../components/MedicalStaffMember/MedicalStaffMember';

import MockCard from '../../components/MockCard/MockCard';

export default () => {

  const [medicalStaff, setMedicalStaff] = useState([]);

  useEffect(() => {
    fetch('https://blooming-chamber-01540.herokuapp.com/medical_staff', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(response => setMedicalStaff(response))
    .catch(error => console.log(error.message));
  }, [])
  
  return (
    <div className="DirectoriesView">
      <h1 className="Primary-Title">Directorio Médico</h1>
      
      { medicalStaff.length > 0 
        ? medicalStaff.map(medicalStaffMemember => (
          <MedicalStaffMember 
            key={medicalStaffMemember.id} 
            profession={medicalStaffMemember.profession} 
            name={medicalStaffMemember.name}
            email={medicalStaffMemember.email}
            graduate={medicalStaffMemember.graduate}
            license={medicalStaffMemember.license}
          />
        ))
        : ['','','',''].map((_, idx) => (
          <MockCard key={idx}/>
        ))
      }
    </div>
  )
}