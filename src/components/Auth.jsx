import React from 'react';
import LoginForm from './LoginForm'

const Auth = ({ user, handleUserFormSubmit, children }) => {



    return user ? children : <LoginForm user={user} handleUserFormSubmit={handleUserFormSubmit} />
}

export default Auth