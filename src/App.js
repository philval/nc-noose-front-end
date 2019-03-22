import React, { Component } from 'react'
import './App.css'
import Auth from './components/Auth'
import { Router } from "@reach/router"
import Header from './components/Header.jsx'
import Articles from './components/Articles'
import Article from './components/Article'
import NoMatch from './components/NoMatch'
import Footer from './components/Footer'

// Header, Sidebar, Footer appear on all pages, NOT part Router.
// Auth not part of Router
class App extends Component {

  state = {
    isLoggedIn: false,
    user: "",
    isValidUser: true,
  }

  componentDidMount = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    const user = localStorage.getItem("user")

    if (isLoggedIn === null || "false") {
      this.setState({ isLoggedIn: false, user: "" })
    }
    if (isLoggedIn === "true") {
      this.setState({ isLoggedIn: true, user: user })
    }
  }

  handleUserLoginFormChange = (event) => {
    const user = event.target.value;
    this.setState({ user: user, isValidUser: true })
  }

  handleUserLoginFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.user === "grumpy19") { // TODO hardcoded
      this.setState({ isLoggedIn: true })
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("user", "grumpy19") // hard refresh
    } else {
      this.setState({ isValidUser: false })
    }
  }

  handleUserLogout = (event) => {
    this.setState({ isLoggedIn: false, user: "" })
    localStorage.setItem("isLoggedIn", "false")
    localStorage.setItem("user", "")
  }

  render() {
    const { isLoggedIn, user, isValidUser } = this.state;
    return (
      <div className="App">
        <Header isLoggedIn={isLoggedIn} user={user} handleUserLogout={this.handleUserLogout} />
        <Auth isLoggedIn={isLoggedIn} isValidUser={isValidUser} handleUserLoginFormSubmit={this.handleUserLoginFormSubmit} handleUserLoginFormChange={this.handleUserLoginFormChange} >
          <Router className="home-container">
            <Articles path="/" user={user} />
            <Articles path="/articles/topic/:topic" user={user} />
            <Article path="/articles/:articleID" user={user} />
            <NoMatch default />
          </Router>
        </Auth >
        <Footer />
      </div >
    )
  }
}

export default App
