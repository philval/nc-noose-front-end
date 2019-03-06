import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticles, getArticlesByTopic } from '../api';
import ArticlesSortBy from './ArticlesSortBy';

class Articles extends Component {

  state = {
    articles: [],
    topic: '',
    sortBy: 'created_at',
  }

  // topic from props object via @reach/router
  // TODO make a new function
  componentDidMount = () => {
    const topic = this.props.topic;
    if (topic === undefined) {
      getArticles()
        .then(({ articles }) => this.setState({ articles: articles }))
        .catch(err => console.log(err))
    } else {
      getArticlesByTopic(topic)
        .then(({ articles }) => this.setState({ articles: articles }))
        .catch(err => console.log(err))
    }
  }

  componentDidUpdate = (prevProps) => {
    const topic = this.props.topic;
    if (prevProps.topic !== this.props.topic) {
      if (topic === undefined) {
        getArticles()
          .then(({ articles }) => this.setState({ articles: articles }))
          .catch(err => console.log(err))
      } else {
        getArticlesByTopic(topic)
          .then(({ articles }) => this.setState({ articles: articles }))
          .catch(err => console.log(err))
      }
    }
  }

  handleSortOrder = (event) => {
    const selectedSort = event.target.value;
    this.setState({ sortBy: selectedSort })
  }

  // TODO h2 : <span> | Topic: </span>
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div className="home-articles" articles={articles} topic={topic}>
        <h2>ARTICLES {topic && topic}</h2>
        <ArticlesSortBy handleSortOrder={this.handleSortOrder} />
        <ul>
          {articles.map(article => <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Articles