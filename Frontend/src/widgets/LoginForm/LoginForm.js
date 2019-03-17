import React from 'react';
import {connect} from 'react-redux';
import { Alert,Row, Form, Button, Col } from 'react-bootstrap';
import {setToken} from '../../actions/auth';
import { apiPost} from '../../helpers/api';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email:'',password:'',error:''};
    this.inputEmail = this.inputEmail.bind(this);
    this.inputPassword = this.inputPassword.bind(this);
    this.submit = this.submit.bind(this);
  }

   inputEmail(email){
    this.setState({email});
  }
  inputPassword(password){
    this.setState({password});
  }
  async submit(){
    try{
      const {data} = await apiPost('/auth/login',{email:this.state.email,password:this.state.password});
      this.props.setToken(data.token);
      localStorage.setItem('token', data.token);
      return;
    }catch(err){
     this.setState({error:'Invalid credential'})
    }
   
  }
  render() {
    return (
      <Row>
        <Col md={{ span: 3, offset: 4 }} >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e)=>this.inputEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e)=>this.inputPassword(e.target.value)}/>
            </Form.Group>
           <Alert variant="danger" hidden={(!this.state.error)}>
  {this.state.error}
</Alert>

            <Button variant="primary" type="button" onClick={this.submit}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    )
  }
}

function mapDispatchToProps(dispatch){
  return {
    setToken:(token) =>{
      dispatch(setToken(token))
    }
  }
}

export default connect(null,mapDispatchToProps)(LoginForm);