import React from 'react';
import LoginForm from './LoginForm'

const Auth = ({ isLoggedIn, isValidUser, userLogin, children }) => {

    return isLoggedIn ? children : <LoginForm isValidUser={isValidUser} userLogin={userLogin} />
}

export default Auth