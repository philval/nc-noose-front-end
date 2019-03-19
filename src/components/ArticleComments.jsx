import React, { Component } from 'react';
import ArticleComment from './ArticleComment';
import { getCommentsByArticleByID, postComment, deleteCommentByID } from '../api';
import CommentAddButton from './CommentAddButton';
import CommentAddForm from './CommentAddForm';
import { runInThisContext } from 'vm';

class ArticleComments extends Component {

  state = {
    comments: [],
    newComment: {},
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
    const displayAddComment = !this.state.displayAddComment; // toggle
    this.setState({ displayAddComment: displayAddComment })
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
      .then(({ comment }) => this.setState({ comments: [comment, ...this.state.comments] }))
      .catch(err => console.log(err))

    const displayAddComment = !this.state.displayAddComment; // toggle
    this.setState({ displayAddComment: displayAddComment })
  }

  handleCommentDelete = (event) => {
    const ID = event.target.dataset.id
    console.log(ID)

    const newArr = this.state.comments.filter(comment => comment.comment_id !== +ID)
    console.log(newArr)

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
        <CommentAddButton handleCommentAddButton={this.handleCommentAddButton} />
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