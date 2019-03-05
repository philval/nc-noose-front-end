import React, { Component } from 'react';
import ArticleComment from './ArticleComment';

class ArticleComments extends Component {

  state = {
    comments: []
  }

  // GET /api/articles/:article_id/comments
  // articleID from props object via @reach/router

  componentDidMount = () => {
    fetch(`http://localhost:9090/api/articles/${this.props.articleID}/comments`)
      .then(response => response.json())
      .then(({ comments }) => this.setState({ comments: comments }))
      .catch(err => console.log(err))
  }


  render() {
    console.log(this.props)
    console.log(this.state.comments)
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