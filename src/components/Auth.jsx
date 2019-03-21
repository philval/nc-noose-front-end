import React from 'react';
import LoginForm from './LoginForm'

const Auth = ({ isLoggedIn, handleUserLoginFormSubmit, handleUserLoginFormChange, children }) => {

    return isLoggedIn ? children : <LoginForm handleUserLoginFormSubmit={handleUserLoginFormSubmit} handleUserLoginFormChange={handleUserLoginFormChange} />
}

export default Auth