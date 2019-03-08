import React from 'react';
import Articles from './Articles';
import Comments from './Comments.jsx';
import Sidebar from './Sidebar.jsx';

const Homepage = () => {
  return (
    <div className="home-container">
      <p className="home-header">Welcome to the homepage</p>
      <Articles />
    </div>
  )
}

export default Homepage