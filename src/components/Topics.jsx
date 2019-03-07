import React, { Component } from 'react';
import { getTopics } from '../api';
// import { Link } from '@reach/router';

class Topics extends Component {

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
      <select id="articleTopic" className="w100">
        {topics.map(topic => <option key={topic.slug} value={topic.slug}>{topic.slug}</option>)}
      </select>
    )
  }

}

export default Topics

//   < select id="articleTopic" >
//     <option value="">--Please choose an option--</option>
//     <option value="dog">Dog</option>
//     <option value="cat">Cat</option>
//     <option value="hamster">Hamster</option>
//     <option value="parrot">Parrot</option>
//     <option value="spider">Spider</option>
//     <option value="goldfish">Goldfish</option>
// </select >