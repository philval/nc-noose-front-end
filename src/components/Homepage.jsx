import React, { Fragment } from 'react';
import Articles from './Articles';

const Homepage = () => {
  return (
    <Fragment>
      <p className="home-header">Welcome to the homepage</p>
      <Articles />
    </Fragment>
  )
}

export default Homepage