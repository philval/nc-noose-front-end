import React, { Fragment } from 'react';
import { Link } from '@reach/router/'
import Sidebar from './Sidebar'

const NoMatch = (props) => {

  return (
    <Fragment>
      <div className="page-content">
        <h2>Page not found...</h2>
        <p>Return to <Link to="/">homepage</Link></p>
      </div>
      <Sidebar />
    </Fragment>
  )
}

export default NoMatch