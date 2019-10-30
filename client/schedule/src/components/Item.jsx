import React, { Component } from 'react';
import { Button,Accordion,Card, InputGroup,FormControl} from 'react-bootstrap';
import {createStore } from 'redux';
import {mainReducer} from '../reducer.js'

let store = createStore(mainReducer);

class Item extends Component {
  constructor(props){
    super(props)
    this.state={
      ...store.getState(),
     
    }
  }

  componentDidMount() {
    fetch()
    .then(res => res.json())
    .then((data) => {
        this.setState({ data: data })
    })
    .catch(console.log)
  }

render(){
  <div>
    <div className ="project">
        <div className= 'p-3 bg-light'>
            <Link to="/" className="latest p-3 text-dark">Latest</Link>
            <Link to="/search" className="search p-3 text-dark">Search</Link>
        </div>
        <Container className="text-center mt-3">
          <Row>
            <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
              <img className = "latestImage mt-4" src={img} alt={title} title ={alt}></img>
              <h3 className = "mt-3">{year}</h3>
            </Col>
          </Row>
        </Container>
      </div>
  </div>
}
}



export default Item;