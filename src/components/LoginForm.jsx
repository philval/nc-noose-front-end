import React, { Fragment } from 'react';

const LoginForm = ({ handleUserLoginFormSubmit, handleUserLoginFormChange }) => {

  return (

    <Fragment>
      <div className="page-content">
        <p>DEMO username is grumpy19</p>
        <form className="user-login-form" onSubmit={handleUserLoginFormSubmit} >
          <input name="user" type="text" className="w100" placeholder="Your username" onChange={handleUserLoginFormChange} required />
          <button type="submit" className="w100">Login</button>
          <p className="hide" id="invalidUserName">Invalid username, try again...</p>
        </form>
      </div>
    </Fragment>
  )
}

export default LoginForm