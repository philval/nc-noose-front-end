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
    user: ""
  }

  handleUserLoginFormChange = (event) => {
    console.log('you are typing')
    const user = event.target.value;
    this.setState({ user: user })
  }

  handleUserLoginFormSubmit = (event) => {
    event.preventDefault();
    console.log('you submitted user form')
    if (this.state.user === "grumpy19") {
      this.setState({ isLoggedIn: true })
    } else {
      console.log('invalid user')
      const invalidUserName = document.getElementById("invalidUserName")
      invalidUserName.classList.remove("hide");
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Auth isLoggedIn={this.state.isLoggedIn} handleUserLoginFormSubmit={this.handleUserLoginFormSubmit} handleUserLoginFormChange={this.handleUserLoginFormChange} >
          <Router className="home-container">
            <Homepage path="/" />
            <Account path="/account" />
            <Articles path="/articles/topic/:topic" />
            <Article path="/articles/:articleID" />
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
