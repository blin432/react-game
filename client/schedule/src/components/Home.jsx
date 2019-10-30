import React, { Component } from 'react';
import {Container} from 'react-bootstrap';
// import {createStore } from 'redux';
// import {mainReducer} from '../reducer.js'

// let store = createStore(mainReducer);

class Home extends Component {
  constructor(props){
    super(props)
    this.state={

     
    }
  }

render(){
  
  return (
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
  );
}
}



export default withRouter(Home);