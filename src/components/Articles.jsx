import React, { Component } from 'react';
import { Link } from '@reach/router';

class Articles extends Component {

  state = {
    articles: [],
  }

  // setState forces re render
  componentDidMount = () => {
    fetch('http://localhost:9090/api/articles')
      .then(response => response.json())
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