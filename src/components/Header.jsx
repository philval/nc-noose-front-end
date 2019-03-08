import React from 'react';
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1>Northcoders Knews</h1>
      <Nav />
    </header>
  )
}

export default Header