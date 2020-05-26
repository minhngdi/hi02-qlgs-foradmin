import React from 'react';
import './App.css';
import Dashboard from './containers/Dashboard';

import CreateWarning from './Warning/CreateWarning'
const {Header} = Layout;

function App() {
  
  return (
    <div className="App">
        <Layout>
          <Header className='header'>
            <h1 className='title'>Quan Ly Giam Sat</h1>
         </Header>
        </Layout>
        <Button>
          Button Test
        </Button>
      <CreateWarning />
=======
      <Dashboard />
>>>>>>> 03ff6c8fc072cb8598fa3a6accc1eead8d3cd504
    </div>
  );
}

export default App;
