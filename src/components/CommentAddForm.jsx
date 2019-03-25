import React, { Component } from 'react'

class CommentAddForm extends Component {

  state = {
    newComment: { author: this.props.user },
  }

  handleCommentAddFormChange = (event) => {
    let newComment = this.state.newComment;
    newComment[event.target.name] = event.target.value;
    this.setState({ newComment });
  }

  handleCommentAddFormSubmit = (event) => {
    event.preventDefault()
    const postBody = this.state.newComment;
    const article_id = this.props.articleID;
    const { addComment } = this.props;
    addComment(article_id, postBody); // api call
  }

  render() {
    const { handleCommentChange } = this.props

    return (
      <form id="CommentAddForm" className="comment-add-form" onSubmit={this.handleCommentAddFormSubmit} >
        <label htmlFor="commentBody">Your Comment</label>
        <textarea name="body" id="commentBody" type="textarea" rows="10" className="w100" required onChange={this.handleCommentAddFormChange} />
        <button type="submit" onClick={() => handleCommentChange(1)} >Submit</button>
      </form >
    )
  }

}

export default CommentAddForm