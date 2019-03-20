import React from 'react';
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1>Northcoders Noose</h1>
      <p>All the news, reviews, tips & tricks.</p>
      <Nav />
    </header>
  )
}

export default Header