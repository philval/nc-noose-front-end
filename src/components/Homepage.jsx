import React from 'react';
import Articles from './Articles';
import Comments from './Comments.jsx';
import Sidebar from './Sidebar.jsx';

const Homepage = () => {
  return (
    <div className="home-container">
      <p>Welcome to the homepage</p>
      <Articles />
      <Comments />
      <Sidebar />
      {/* <Sidebar /> */}
    </div>
  )
}

export default Homepage