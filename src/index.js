import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Dashboard from "./containers/Dashboard";
import Inspection from "./containers/Inspection";
import CreateWarning from "./containers/Warning/CreateWarning";
import WarningGrid from "./containers/WarningGrid";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const Landing = () => (
  <div>
    <h3>This is landing page with Foo and Bar</h3>
    <Dashboard />
    <WarningGrid />
  </div>
);
//  const Dashboard = () => <Dashboard />;
//  const WarningGrid = () => <WarningGrid />;
// const About = () => <div>This is component About.</div>;
// const Header = () => (
//   <div style={{height: "30px", background: "gray"}}>Header | 
//   <Link to="/about"> Go to about</Link>
//   </div>
// );
// const Footer = () => (
//   <div style={{ height: "30px", background: "gray" }}>Footer |
//   <Link to="/about"> Go to about</Link>
//   </div>
// );

const NotFound = () => <div>Not found</div>

class App1 extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/alert" component={WarningGrid} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<App1 />, document.getElementById("root"));

serviceWorker.register();