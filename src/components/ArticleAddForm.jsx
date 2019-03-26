import React, { Component } from 'react'
import TopicSelect from './TopicSelect'

class ArticleAddForm extends Component {

  state = {
    newArticle: { topic: "coding", author: this.props.user }, // TODO bad pattern
  }

  handleArticleAddFormChange = (event) => {
    let newArticle = this.state.newArticle;
    newArticle[event.target.name] = event.target.value;
    this.setState({ newArticle })
  }

  handleArticleAddFormSubmit = (event) => {
    event.preventDefault()
    const postBody = this.state.newArticle;
    this.props.addArticle(postBody); // api call
  }

  render() {
    return (
      <form id="articleAddForm" className="article-add-form" onSubmit={this.handleArticleAddFormSubmit} >
        <label htmlFor="articleTitle">Title</label>
        <input name="title" id="articleTitle" type="text" className="w100" required onChange={this.handleArticleAddFormChange} />
        <label htmlFor="articleTopic">Please select a topic</label>
        <TopicSelect handleArticleAddFormChange={this.handleArticleAddFormChange} />
        <label htmlFor="articleBody">Content</label>
        <textarea name="body" id="articleBody" type="textarea" rows="10" className="w100" required onChange={this.handleArticleAddFormChange} />
        <button type="submit">Submit</button>
      </form >
    )
  }
}

export default ArticleAddForm