import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header.jsx'
import Homepage from './components/Homepage.jsx'
import Account from './components/Account.jsx'
import Search from './components/Search'
import Articles from './components/Articles';
import Article from './components/Article';
import Sidebar from './components/Sidebar';

// header and sidebar appear on all pages, NOT part Router
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Router>
          <Homepage path="/" />
          <Articles path="/articles/topic/:topic" />
          <Article path="/articles/:articleID" />
          <Account path="/account" />
          <Search path="/search" />
        </Router>
      </div >
    );
  }
}

export default App;
