import React, { Component } from 'react';
import { getTopics } from '../api';

class TopicSelect extends Component {

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
    const { handleArticleAddFormChange } = this.props;
    return (
      <select name="topic" id="articleTopic" className="w100" onChange={handleArticleAddFormChange} required >
        {topics.map(topic => <option key={topic.slug} value={topic.slug}>{topic.slug}</option>)}
      </select>
    )
  }

}

export default TopicSelect