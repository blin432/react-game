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
        <Container className="text-center mt-3">
          <Row>
            <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
              <img src=""></img>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  }
  
  export default  withRouter(Home);