import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import Homepage from './components/Homepage.jsx'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Homepage />
      </div >
    );
  }
}

export default App;
