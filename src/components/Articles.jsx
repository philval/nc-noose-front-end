import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticles } from '../api';

class Articles extends Component {

  state = {
    articles: [],
  }

  componentDidMount = () => {
    getArticles()
      .then(({ articles }) => this.setState({ articles: articles }))
      .catch(err => console.log(err))
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="home-articles" articles={articles}>
        <h2>ARTICLES</h2>
        <ul>
          {articles.map(article => <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Articles