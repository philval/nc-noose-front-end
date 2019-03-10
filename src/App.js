import React, { Component } from 'react';
import './App.css';
import { Router } from "@reach/router";
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
import Account from './components/Account.jsx';
import Login from './components/Login.jsx';
import Articles from './components/Articles';
import Article from './components/Article';


// header and sidebar appear on all pages, NOT part Router
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Router className="home-container">
          <Homepage path="/" />
          <Account path="/account" />
          <Login path="/login" />
          <Articles path="/articles/topic/:topic" />
          <Article path="/articles/:articleID" />
        </Router>
      </div >
    );
  }
}

export default App;
