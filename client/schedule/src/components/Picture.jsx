import React, { Component } from 'react';
import {Container,Row,Col,Navbar} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import { Link } from "react-router-dom"; 

class Home extends Component {
    constructor(props){
      super(props)
      this.state={
        data:'',
      }
    }
  

    componentDidMount() {
        fetch('')
        .then(res => res.json())
        .then((data) => {
            this.setState({ data: data })
        })
        .catch(console.log)
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
              
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }
  
  export default  withRouter(Home);