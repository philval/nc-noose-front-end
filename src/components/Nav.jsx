import React from 'react'
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/account" className="nav-link">Account</Link>
      <Link to="/login" className="nav-link">Login</Link>
    </nav >
  )
}

export default Nav;