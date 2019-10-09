import React, { Component } from 'react';
import './App.css';
import Schedule from './components/Schedule.jsx';

import { Switch, Route, withRouter} from 'react-router-dom';



class App extends Component {
  render(){
      return(
        <div className="App">
        <Switch>
          <Route  path="/" exact component={Inputfield}/>
          <Route  path="/schedule/:id" component={SpecificNotes}/>  {/* URL path to get specific note, Try  "http://localhost:3000/notes/1"!  */}
        </Switch>
      </div>
      );
    }
}
  


export default withRouter(App);
