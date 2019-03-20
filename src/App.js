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
    user: true
  }


  handleUserFormSubmit = (event) => {
    event.preventDefault();
    console.log('you submitted user form')
    // this.setState({ user: user })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Auth user={this.state.user} handleUserFormSubmit={this.handleUserFormSubmit} >
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
