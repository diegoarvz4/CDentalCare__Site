import React from 'react';
import { Route } from 'react-router-dom';

import PadServicesView from '../PadServicesView/PadServicesView';
import SpecialtiesView from '../SpecialtiesView/SpecialtiesView';
import LaboratoriesView from '../LaboratoriesView/LaboratoriesView';
import DirectoriesView from '../DirectoriesView/DirectoriesView';
import MedicalStaff from '../MedicalStaff/MedicalStaff';

export default () => {

  return (
    <>
      <Route exact path="/servicios/pad">
        <PadServicesView />
      </Route>
      <Route exact path="/servicios/especialidades">
        <SpecialtiesView />
      </Route>
      <Route exact path="/servicios/laboratorios">
        <LaboratoriesView />
      </Route>
      <Route path="/directorios/administracion">
        <DirectoriesView />
      </Route>
      <Route path="/directorios/personal_medico">
        <MedicalStaff />
      </Route>
    </>
  )
}