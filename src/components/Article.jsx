import React, { Component } from 'react';
import ArticleComments from './ArticleComments'

class Article extends Component {

  state = {
    singleArticle: [],
  }

  // articleID from props object via @reach/router
  componentDidMount = () => {
    fetch(`http://localhost:9090/api/articles/${this.props.articleID}`)
      .then(response => response.json())
      .then(({ article }) => this.setState({ singleArticle: article }))
      .catch(err => console.log(err))
  }

  render() {
    // get articleID from props object
    const { singleArticle } = this.state;
    const created_at = new Date(singleArticle.created_at).toString();
    // TODO DD MM YYYY

    return (
      <div className="single-article" singlearticle={singleArticle}>
        <h1>{singleArticle.title}</h1>
        <p>{created_at} | By: {singleArticle.author} | Topic: {singleArticle.topic}</p>
        <p>{singleArticle.body}</p>
        <p>Comments: {singleArticle.comment_count} | Votes: {singleArticle.votes}</p>
        <hr />
        <ArticleComments articleID={this.props.articleID} />
      </div>

    );
  }
}

export default Article;