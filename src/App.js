import React from 'react';
import {Layout, Button} from 'antd';
import './App.css';

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
    </div>
  );
}

export default App;
