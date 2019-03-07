import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticles, postArticle } from '../api';
import ArticlesSortBy from './ArticlesSortBy';
import ArticleAddButton from './ArticleAddButton';
import ArticleAddForm from './ArticleAddForm';

class Articles extends Component {

  state = {
    articles: [],
    topic: '',
    sortBy: 'created_at',
    displayAddArticle: false,
  }

  componentDidMount = () => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;

    getArticles(topic, sortBy)
      .then(({ articles }) => this.setState({ articles: articles }))
      .catch(err => console.log(err))
  }

  componentDidUpdate = (prevProps, prevState) => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    if (prevProps.topic !== this.props.topic || prevState.sortBy !== this.state.sortBy) {

      getArticles(topic, sortBy)
        .then(({ articles }) => this.setState({ articles: articles }))
        .catch(err => console.log(err))
    }
  }

  handleSortOrder = (event) => {
    const selectedSort = event.target.value;
    this.setState({ sortBy: selectedSort })
  }

  handleArticleAddButton = (event) => {
    const displayAddArticle = !this.state.displayAddArticle; // toggle
    this.setState({ displayAddArticle: displayAddArticle })
  }

  handleArticleAddForm = (event) => {
    event.preventDefault()
    const articleTitle = document.getElementById("articleTitle").value;
    const articleTopic = document.getElementById("articleTopic").value;
    const articleUsername = document.getElementById("articleUsername").value;
    const articleBody = document.getElementById("articleBody").value;

    const postBody = {
      title: articleTitle,
      topic: articleTopic,
      author: articleUsername,
      body: articleBody,
    }

    postArticle(postBody)
      .then(({ article }) => this.setState({ articles: [article, ...this.state.articles] }))
      .catch(err => console.log(err))
  }

  // TODO h2 : <span> | Topic: </span>
  render() {
    const { articles, displayAddArticle } = this.state;
    const { topic } = this.props;
    return (
      <div className="home-articles" articles={articles} topic={topic}>
        <h2>ARTICLES {topic && topic}</h2>
        <ArticlesSortBy handleSortOrder={this.handleSortOrder} />
        <hr />
        <ArticleAddButton className="button article-add" handleArticleAddButton={this.handleArticleAddButton} />
        {displayAddArticle && <ArticleAddForm handleArticleAddForm={this.handleArticleAddForm} />}
        <hr />
        <ul>
          {articles.map(article => <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Articles