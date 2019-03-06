import React, { Component } from 'react';
import ArticleComment from './ArticleComment';
import { getCommentsByArticleByID } from '../api';

class ArticleComments extends Component {

  state = {
    comments: []
  }

  // GET /api/articles/:article_id/comments
  // articleID from props object via @reach/router
  componentDidMount = () => {
    const id = this.props.articleID;
    getCommentsByArticleByID(id)
      .then(({ comments }) => this.setState({ comments: comments }))
      .catch(err => console.log(err))
  }

  render() {
    const { comments } = this.state;
    return (
      <div className="article-comments" comments={comments}>
        <ul>
          {comments.map(comment => <ArticleComment key={comment.comment_id} comment={comment} />)}

        </ul>
      </div>
    );
  }
}

export default ArticleComments;