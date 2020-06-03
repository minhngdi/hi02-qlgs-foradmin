import React from "react";
import ReactDom from "react-dom";
import { Switch, Router, Route, IndexRoute, hashHistory } from "react-router";

import "./App.css";
import Dashboard from "./containers/Dashboard";
import Inspection from "./containers/Inspection";
import CreateWarning from "./containers/Warning/CreateWarning";
import WarningGrid from "./containers/WarningGrid";

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route path='/dashboard' component={Dashboard} />
        {/* <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </Switch> */}
      <Dashboard/>
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


// class App extends React.Component {
//   render() {
//     return (
//       <div>
//       <BrowserRouter>
//         <div>
//             <Switch>
//               <Route exact path="/dashboard" component={Dashboard} />
//               <Route path="/alert" component={WarningGrid} />
//               <Route component={NotFound} />
//             </Switch>
//         </div>
//       </BrowserRouter>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));
