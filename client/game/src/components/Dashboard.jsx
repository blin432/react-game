import React, { Component } from 'react';
import { Button, Form,Container} from 'react-bootstrap';
// import {createStore } from 'redux';
// import {mainReducer} from '../reducer.js'
import Levels from './Levels.jsx'

// let store = createStore(mainReducer);

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      player:[],
      
    }
  }

 

render(){
  let {item,i}= this.props
  return (
    <Container className="text-center">
      <Row>
        <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
          <h2 className="mt-5">Beat the Computer!</h2>
          <h4 className="">Don't get Hit</h4>
          <Levels/>
          <div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
}



export default withRouter(Dashboard);