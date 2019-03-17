import React from 'react';
import Logo from '../components/Logo'
import LoginForm from '../widgets/LoginForm/LoginForm'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
class Login extends React.Component {

  render() {
    const { token } = this.props;

    if (token) {
      return <Redirect to="/admin/articles" />;
    }

    return (
      <Container>
        <Logo />
        <LoginForm />
      </Container>
    )
  }
}
const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Login);