import React, { Component } from 'react'

class TopicAddForm extends Component {

  state = {
    newTopic: {},
  }

  handleTopicAddFormChange = (event) => {
    let newTopic = this.state.newTopic;
    newTopic[event.target.name] = event.target.value;
    this.setState({ newTopic })
  }

  handleTopicAddFormSubmit = (event) => {
    event.preventDefault();
    const postBody = this.state.newTopic;
    this.props.addTopic(postBody);
  }

  render() {

    return (
      <form id="TopicAddForm" className="topic-add-form" onSubmit={this.handleTopicAddFormSubmit} >
        <label htmlFor="topicSlug">Short name</label>
        <input name="slug" id="topicSlug" type="text" className="w100" required onChange={this.handleTopicAddFormChange} />
        <label htmlFor="topicDescription">Long name</label>
        <input name="description" id="topicDescription" type="text" className="w100" required onChange={this.handleTopicAddFormChange} />
        <button type="submit" className="w100 buttton-topic-submit" >Submit</button>
      </form >
    )

  }
}

export default TopicAddForm