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

const NotFound = () => <div>Not found</div>

class App1 extends React.Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/alert" component={WarningGrid} />
              <Route path="/addcheck" component={CreateWarning} />   
              <Route path="/checklist" component={Inspection} />              
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