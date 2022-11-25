import React from 'react';
import Navbar from './Components/Navbar';
import './Styles/main.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
  

function App() {
  return (
    
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path='/Dashboard'>
            <Dashboard/>
            </Route>
            <Route exact path='/Page1'>
            <Page1/>
            </Route>
            <Route exact path='/Page2'>
            <Page2/>
            </Route>
            </Switch>
        </div>
       
      </div>
    </Router>
    

  );
}

export default App;