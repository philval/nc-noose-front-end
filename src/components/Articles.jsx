import React, { Component } from 'react';

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
    console.log(articles[0], ' <<<<')

    return (
      <div className="home-articles" articles={articles}>
        <h2>ARTICLES</h2>
        <ul>
          {articles && articles.map(article => <li key={article.article_id}>{article.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default Articles