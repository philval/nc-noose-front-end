import React, { Component } from 'react'
import './App.css'
import Auth from './components/Auth'
import { Router } from "@reach/router"
import Header from './components/Header.jsx'
import Homepage from './components/Homepage.jsx'
import Account from './components/Account.jsx'
import Articles from './components/Articles'
import Article from './components/Article'
import NoMatch from './components/NoMatch'

// header and sidebar appear on all pages, NOT part Router
class App extends Component {

  state = {
    isLoggedIn: false,
    user: "",
  }

  componentDidMount = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (isLoggedIn === null || "false") {
      this.setState({ isLoggedIn: false })
    }
    if (isLoggedIn === "true") {
      this.setState({ isLoggedIn: true })
    }
  }

  handleUserLoginFormChange = (event) => {
    const user = event.target.value;
    this.setState({ user: user })
  }

  handleUserLoginFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.user === "grumpy19") { // TODO hardcoded
      this.setState({ isLoggedIn: true })
      localStorage.setItem("isLoggedIn", "true")
    } else {
      const invalidUserName = document.getElementById("invalidUserName") // TODO DOMDOMDOM !!
      invalidUserName.classList.remove("hide");
    }
  }

  handleUserLogout = (event) => {
    this.setState({ isLoggedIn: false, user: "" })
    localStorage.setItem("isLoggedIn", "false")
  }

  render() {
    const { isLoggedIn, user } = this.state;
    return (
      <div className="App">
        <Header isLoggedIn={isLoggedIn} user={user} handleUserLogout={this.handleUserLogout} />
        <Auth isLoggedIn={this.state.isLoggedIn} handleUserLoginFormSubmit={this.handleUserLoginFormSubmit} handleUserLoginFormChange={this.handleUserLoginFormChange} >
          <Router className="home-container">
            <Homepage path="/" />
            <Account path="/account" />
            <Articles path="/articles/topic/:topic" />
            <Article path="/articles/:articleID" />
            {/* <NoMatch default path="/not-found" /> */}
            <NoMatch default />
          </Router>
        </Auth >
        <footer>
          &copy; NC Noose Enterprises {new Date().getFullYear()}&nbsp;&nbsp;|&nbsp;&nbsp;
          Built by <a href="https://github.com/philval" target="_blank" rel="noopener noreferrer">philval</a>
        </footer>
      </div >
    )
  }
}

export default App
