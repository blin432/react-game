import React, { Component } from 'react';
import { Button,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import {createStore } from 'redux';
import {mainReducer} from '../reducer.js'

let store = createStore(mainReducer);

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      ...store.getState(),
     
    }
  }

render(){
  
  return (
   
  );
}
}



export default Dashboard;