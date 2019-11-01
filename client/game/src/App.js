import React, { Component } from 'react';
import './App.css';
import Home from './components/Home.jsx.js';
import Username from './components/Username.jsx.js';
import Dashboard from './components/Dashboard.jsx.js';
import Navbar from './components/Navbar.jsx.js';

import { Switch, Route, withRouter} from 'react-router-dom';



class App extends Component {
  render(){
    <Navbar/>
      return(
        <div className="App">
        <Switch>
          <Route  path="/" exact component={Home}/>
          <Route  path="/username" component={Username}/>
          <Route  path="/dashboard" component={Dashboard}/>  
        </Switch>
      </div>
      );
    }
}
  


export default withRouter(App);
