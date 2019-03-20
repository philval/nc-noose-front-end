import React, { Fragment } from 'react';

const LoginForm = ({ user, handleUserFormSubmit }) => {

  return (

    <Fragment>
      <div className="page-content">
        <p>DEMO username is grumpy19</p>
        <form onSubmit={handleUserFormSubmit} >
          <input type="text" placeholder="Your username" />
          <button type="submit">Enter</button>
        </form>
      </div>
    </Fragment>
  )
}

export default LoginForm