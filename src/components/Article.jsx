import React, { Component } from 'react';
import ArticleComments from './ArticleComments'
import { getArticleByID } from '../api';

class Article extends Component {

  state = {
    singleArticle: [],
  }

  componentDidMount = () => {
    const id = this.props.articleID;
    getArticleByID(id)
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