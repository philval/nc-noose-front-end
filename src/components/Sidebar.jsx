import React, { Component } from 'react';
import { getTopics } from '../api';
import { Link } from '@reach/router';
import TopicAddButton from './TopicAddButton';
import TopicAddForm from './TopicAddForm';
import { postTopic } from '../api';

class Sidebar extends Component {

  state = {
    topics: [],
    displayAddTopic: false,
  }

  componentDidMount = () => {
    getTopics()
      .then(({ topics }) => this.setState({ topics: topics }))
      .catch(err => console.log(err));
  }

  handleTopicAddButton = (event) => {
    const displayAddTopic = !this.state.displayAddTopic; // toggle
    this.setState({ displayAddTopic: displayAddTopic });
  }

  handleTopicAddForm = (event) => {
    event.preventDefault();
    const topicSlug = document.getElementById("topicSlug").value;
    const topicDescription = document.getElementById("topicDescription").value;

    const postBody = {
      slug: topicSlug.toLowerCase(),
      description: topicDescription,
    }

    console.log(postBody)

    postTopic(postBody)
      .then(({ topic }) => this.setState({ topics: [topic, ...this.state.topics] }))
      .catch(err => console.log(err));

    const displayAddTopic = !this.state.displayAddTopic; // toggle
    this.setState({ displayAddTopic: displayAddTopic });
  }

  render() {
    const { topics, displayAddTopic } = this.state;
    return (
      <div className="home-sidebar">
        <h2>TOPICS</h2>
        <ul>
          {topics.map(topic => <li key={topic.slug}><Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link></li>)}
        </ul>
        <TopicAddButton handleTopicAddButton={this.handleTopicAddButton} />
        {displayAddTopic && <TopicAddForm handleTopicAddForm={this.handleTopicAddForm} />}
      </div>
    )
  }

}

export default Sidebar