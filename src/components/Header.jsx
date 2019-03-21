import React from 'react';
import Logo from './Logo'
import Nav from './Nav'
import { Link } from '@reach/router';

const Header = ({ isLoggedIn, user, handleUserLogout }) => {

  return (
    <header className="header">
      {isLoggedIn ? <p className="header-greeting">Welcome <strong>{user}</strong> | <Link to="/" onClick={handleUserLogout} >Logout</Link></p> : <p className="header-greeting">Please login...</p>}
      <Logo />
      <h1>Northcoders Noose</h1>
      <p>All the news, reviews, tips & tricks.</p>
      <Nav />
    </header>
  )
}

export default Header