import React, { Component } from 'react';
import { Button, Form,Container} from 'react-bootstrap';
// import {createStore } from 'redux';
// import {mainReducer} from '../reducer.js'

// let store = createStore(mainReducer);

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state={
      player:[],
      
    }
  }

  // componentDidMount() {
  //   fetch('')
  //   .then(res => res.json())
  //   .then((data) => {
  //       this.setState({ data: data })
  //   })
  //   .catch(console.log)
  // }


render(){
  let {item,i}= this.props
  return (
    <Container className="text-center">
      <Row>
        <Col md={{span: 8, offset: 2}} lg={{span: 8, offset: 2}}>
          <h2 className="mt-5">NOTES!</h2>
          <h4 className="">Click On The Note Tiles To Edit!</h4>
          <Form  className="d-flex flex-row justify-content-center align-items-center" onSubmit={this.handleSubmit}>
            <Form.Group className="m-0 pl-2"  as={Col}>
                  <Form.Control type="text" value={this.state.inputValue}  onChange={this.handleChange}/>
            </Form.Group>
            <Button  style={{display:"block"}} className = "m-0 mr-2" variant="primary" type="submit"> ADD</Button>
          </Form>
          <div>
           <Schedule></Schedule>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
}



export default withRouter(Dashboard);