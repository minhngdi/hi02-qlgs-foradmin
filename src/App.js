import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import Inspection from "./containers/Inspection";

import CreateWarning from './containers/Warning/CreateWarning'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <br />
      <Inspection />
    </div>
  );
}
      // <Dashboard />

export default App;
