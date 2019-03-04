import React from 'react';
import Logo from './Logo'
import Nav from './Nav'
import SearchArticles from './SearchArticles'
import UserLogin from './UserLogin'

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <h1>Northcoders Knews</h1>
      <Nav />
      <SearchArticles />
      <UserLogin />
    </header>
  )
}

export default Header