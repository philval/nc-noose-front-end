import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header.jsx'
import Homepage from './components/Homepage.jsx'
import Account from './components/Account.jsx'
import Search from './components/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Homepage path="/" />
          <Account path="/account" />
          <Search path="/search" />
        </Router>
      </div >
    );
  }
}

export default App;
