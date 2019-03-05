import React from 'react'
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/account">Account</Link>
      <Link to="/search">Search</Link>
    </nav >
  )
}

export default Nav;