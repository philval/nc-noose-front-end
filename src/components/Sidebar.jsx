import React, { Component } from 'react'
import { getTopics } from '../api'
import { Link } from '@reach/router'
import TopicAddForm from './TopicAddForm'
import { postTopic } from '../api'
import Button from './Button'

class Sidebar extends Component {

  state = {
    topics: [],
    newTopic: {},
    displayAddTopic: false,
  }

  componentDidMount = () => {
    getTopics()
      .then(({ topics }) => this.setState({ topics: topics }))
      .catch(err => console.log(err));
  }

  handleTopicAddButton = (event) => {
    this.setState((prevState) => ({ displayAddTopic: !prevState.displayAddTopic }))
  }

  handleTopicAddFormChange = (event) => {
    let newTopic = this.state.newTopic;
    newTopic[event.target.name] = event.target.value;
    this.setState({ newTopic })
  }

  handleTopicAddFormSubmit = (event) => {
    event.preventDefault();
    const postBody = this.state.newTopic;

    postTopic(postBody)
      .then(({ topic }) => this.setState((prevState) => ({
        topics: [topic, ...this.state.topics],
        displayAddTopic: !prevState.displayAddTopic
      })
      ))
      .catch(err => console.log(err));
  }

  render() {
    const { topics, displayAddTopic } = this.state;

    return (
      <aside className="home-sidebar">
        <h2>TOPICS</h2>
        <ul>
          {topics.map(topic => <li key={topic.slug}><Link to={`/articles/topic/${topic.slug}`}>{topic.slug}</Link></li>)}
        </ul>
        <Button className="w100 buttton-topic-add" handler={this.handleTopicAddButton} label="New Topic" />
        {displayAddTopic && <TopicAddForm handleTopicAddFormSubmit={this.handleTopicAddFormSubmit} handleTopicAddFormChange={this.handleTopicAddFormChange} />}
      </aside>
    )
  }

}

export default Sidebar