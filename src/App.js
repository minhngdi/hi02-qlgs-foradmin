import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';
import Inspection from "./containers/Inspection";


function App() {
  return (
    <div className="App">
      <Dashboard />
      <br />
      <Inspection />
    </div>
  );
}

export default App;
