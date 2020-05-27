import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import Inspection from "./containers/Inspection";

import CreateWarning from './containers/Warning/CreateWarning'
import WarningGrid from "./containers/WarningGrid";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <br />
      <WarningGrid/>
      <br />
      <Inspection />
      <br />
      <CreateWarning />
    </div>
  );
}

export default App;
