import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Employee from '../../components/Employee/Employee';
import * as employeesDirectory from './employees';
import './DirectoriesView.scss';

export default () => {
  const [directoryType, setDirectoryType] = useState('')
  const [employees, setEmployees] = useState([]);

  const { id } = useParams();

  useEffect(()=> {
    switch(id) {
      case 'administracion':
        setDirectoryType('Administrativo');
        return setEmployees(employeesDirectory.admin_employees);
      case 'personal_medico':
        setDirectoryType('Médico');
        return setEmployees(employeesDirectory.medical_employees)
      default:
        break;
    }
  }, [])

  return (
    <div className="DirectoriesView">
      <h1 className="Secondary-Title">{`Directorio ${directoryType}`}</h1>
      {
        employees.map(employee => (
          <Employee 
            key={employee.id} 
            attribute={employee.attribute} 
            name={employee.name}
            phone={employee.phone}
            email={employee.email}
          />
        ))
      }
    </div>
  )    
};