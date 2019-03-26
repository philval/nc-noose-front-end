import React, { Component, Fragment } from 'react';

class LoginForm extends Component {

  // const LoginForm = ({ handleUserLoginFormSubmit, handleUserLoginFormChange, isValidUser }) => {

  state = {
    userLogin: "",
  }

  handleUserLoginFormChange = (event) => {
    const userLogin = event.target.value;
    this.setState({ userLogin: userLogin })
  }

  handleUserLoginFormSubmit = (event) => {
    event.preventDefault();
    console.log('clicked login')
    const user = this.state.userLogin;
    this.props.userLogin(user)
  }

  render() {

    const { isValidUser } = this.props;

    return (
      <Fragment>
        <div className="page-content">
          <p>DEMO username is grumpy19</p>
          <form className="user-login-form" onSubmit={this.handleUserLoginFormSubmit} >
            <input name="user" type="text" className="w100" placeholder="Your username" onChange={this.handleUserLoginFormChange} required />
            <button type="submit" className="w100">Login</button>
            {!isValidUser && <p>Invalid username, please try again...</p>}
          </form>
        </div>
      </Fragment>
    )
  }
}

export default LoginForm