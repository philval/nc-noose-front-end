import React, { Component } from 'react';
import ArticleComment from './ArticleComment';
import { getCommentsByArticleByID, postComment } from '../api';
import CommentAddButton from './CommentAddButton';
import CommentAddForm from './CommentAddForm';

class ArticleComments extends Component {

  state = {
    comments: [],
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

  handleCommentAddForm = (event) => {
    event.preventDefault()
    const commentUsername = document.getElementById("commentUsername").value;
    const commentBody = document.getElementById("commentBody").value;

    const postBody = {
      author: commentUsername,
      body: commentBody,
    }

    const article_id = this.props.articleID;

    postComment(article_id, postBody)
      .then(({ comment }) => this.setState({ comments: [comment, ...this.state.comments] }))
      .catch(err => console.log(err))
  }

  render() {
    const { comments, displayAddComment } = this.state;
    return (
      <div className="article-comments" comments={comments}>
        <hr />
        <CommentAddButton handleCommentAddButton={this.handleCommentAddButton} />
        {displayAddComment && <CommentAddForm handleCommentAddForm={this.handleCommentAddForm} />}
        <hr />
        <ul>
          {comments.map(comment => <ArticleComment key={comment.comment_id} comment={comment} />)}

        </ul>
      </div>
    );
  }
}

export default ArticleComments;