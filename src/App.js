import React from 'react';
import {Layout, Button} from 'antd';
import './App.css';

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
    </div>
  );
}

export default App;
