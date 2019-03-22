import React, { Component } from 'react'
import ArticleComment from './ArticleComment'
import { getCommentsByArticleByID, postComment, deleteCommentByID } from '../api'
import CommentAddForm from './CommentAddForm'
import Button from './Button'

class ArticleComments extends Component {

  state = {
    comments: [],
    newComment: { author: this.props.user },
    displayAddComment: false,
  }

  // GET /api/articles/:article_id/comments
  // articleID from props object via @reach/router
  componentDidMount = () => {
    const id = this.props.articleID;
    getCommentsByArticleByID(id)
      .then(({ comments }) => this.setState({ comments: comments }))
      .catch(err => console.log(err))
  }

  handleCommentAddButton = (event) => {
    this.setState((prevState) => ({ displayAddComment: !prevState.displayAddComment }))
  }

  handleCommentAddFormChange = (event) => {
    let newComment = this.state.newComment;
    newComment[event.target.name] = event.target.value;
    this.setState({ newComment });
  }

  handleCommentAddFormSubmit = (event) => {
    event.preventDefault()
    const article_id = this.props.articleID;
    const postBody = this.state.newComment;

    postComment(article_id, postBody)
      .then(({ comment }) => this.setState((prevState) => ({
        comments: [comment, ...this.state.comments],
        displayAddComment: !prevState.displayAddComment
      })
      ))
      .catch(err => console.log(err))
  }

  handleCommentDelete = (ID) => {
    const newArr = this.state.comments.filter(comment => comment.comment_id !== +ID)

    deleteCommentByID(ID)
      .then(() => {
        this.setState({ comments: newArr })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { comments, displayAddComment } = this.state;
    return (
      <div className="article-comments" comments={comments}>
        <hr />
        <Button handler={this.handleCommentAddButton} label="Add New Comment" />

        {displayAddComment && <CommentAddForm handleCommentAddFormSubmit={this.handleCommentAddFormSubmit} handleCommentAddFormChange={this.handleCommentAddFormChange} />}
        <hr />
        <ul>
          {comments.map(comment => <ArticleComment key={comment.comment_id} comment={comment} handleCommentDelete={this.handleCommentDelete} />)}

        </ul>
      </div>
    );
  }
}

export default ArticleComments;