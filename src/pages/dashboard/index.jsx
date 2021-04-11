import React, { useState } from 'react';

import AppBar from '../../components/appBar/index';
import fakedb from '../../utils/fakedb';

const Dashboard = () => {
  const [professors, setProfessors] = useState(fakedb);
  return (
    <AppBar professors={professors} setProfessors={setProfessors} />
  );
};

export default Dashboard;
