import React, { Component } from 'react';
import { getTopics } from '../api';
import { Link } from '@reach/router';

class Sidebar extends Component {

  state = {
    topics: []
  }

  componentDidMount = () => {
    getTopics()
      .then(({ topics }) => this.setState({ topics: topics }))
      .catch(err => console.log(err))
  }

  render() {
    const { topics } = this.state;
    return (
      <div className="home-sidebar">
        <h2>TOPICS</h2>
        <ul>
          {topics.map(topic => <li key={topic.slug}><Link to={`/articles/topic/${topic.slug}`}>{topic.description}</Link></li>)}
        </ul>
      </div>
    )
  }

}

export default Sidebar