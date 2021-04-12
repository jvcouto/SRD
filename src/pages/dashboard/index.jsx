import React, { useState } from 'react';

import AppBar from '../../components/appBar/index';
import fakedb from '../../utils/fakedb';
import Tecnico from '../../utils/fakeTec';

const Dashboard = () => {
  const [professors, setProfessors] = useState(fakedb);
  const [tecnicos, setTecnicos] = useState(Tecnico);
  return (
    <AppBar
      professors={professors}
      setProfessors={setProfessors}
      tecnicos={tecnicos}
      setTecnicos={setTecnicos}
    />
  );
};

export default Dashboard;
