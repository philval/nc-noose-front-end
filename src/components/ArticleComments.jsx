import React, { Component } from 'react'
import ArticleComment from './ArticleComment'
import { getCommentsByArticleByID, postComment, deleteCommentByID } from '../api'
import CommentAddForm from './CommentAddForm'
import Button from './Button'

class ArticleComments extends Component {

  state = {
    comments: [],
    displayAddComment: false,
  }

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

  addComment(article_id, postBody) {
    // const article_id = this.props.articleID;
    // console.log(article_id)
    postComment(article_id, postBody)
      .then(({ comment }) => console.log(comment) || this.setState((prevState) => ({
        comments: [comment, ...this.state.comments],
        displayAddComment: !prevState.displayAddComment
      })
      ))
      .catch(err => console.log(err))
  }

  handleCommentDelete = (ID) => {
    const newArr = this.state.comments.filter(comment => comment.comment_id !== +ID)
    this.props.handleCommentChange(-1)

    deleteCommentByID(ID)
      .then(() => {
        this.setState({ comments: newArr })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { comments, displayAddComment } = this.state;
    const { articleID, user, handleCommentChange } = this.props
    return (
      <div className="article-comments" comments={comments}>
        <hr />
        <Button handler={this.handleCommentAddButton} label="Add New Comment" />

        {displayAddComment && <CommentAddForm user={user} articleID={articleID} addComment={this.addComment} handleCommentChange={handleCommentChange} />}
        <hr />
        <ul>
          {comments.map(comment => <ArticleComment user={user} key={comment.comment_id} comment={comment} handleCommentDelete={this.handleCommentDelete} />)}

        </ul>
      </div>
    );
  }
}

export default ArticleComments;