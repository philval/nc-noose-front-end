import React from 'react';
import LoginForm from './LoginForm'

const Auth = ({ isLoggedIn, isValidUser, handleUserLoginFormSubmit, handleUserLoginFormChange, children }) => {

    return isLoggedIn ? children : <LoginForm handleUserLoginFormSubmit={handleUserLoginFormSubmit} handleUserLoginFormChange={handleUserLoginFormChange} isValidUser={isValidUser} />
}

export default Auth