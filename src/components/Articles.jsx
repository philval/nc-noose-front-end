import React, { Component } from 'react';
import { Link } from '@reach/router';
import { getArticles, getAllArticles, getArticlesByTopic, postArticle } from '../api';
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

  // topic from props object via @reach/router
  // TODO make a new function
  componentDidMount = () => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    // if (topic === undefined) { // get rid

    getArticles(topic, sortBy)
      .then(({ articles }) => this.setState({ articles: articles }))
      .catch(err => console.log(err))

    //   getArticles(topic, sortBy)
    //     .then(({ articles }) => this.setState({ articles: articles }))
    //     .catch(err => console.log(err))
    // } else {
    //   getArticlesByTopic(topic)
    //     .then(({ articles }) => this.setState({ articles: articles }))
    //     .catch(err => console.log(err))
    // }
  }

  componentDidUpdate = (prevProps) => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    if (prevProps.topic !== this.props.topic) {

      getArticles(topic, sortBy)
        .then(({ articles }) => this.setState({ articles: articles }))
        .catch(err => console.log(err))

      // if (topic === undefined) {
      //   getArticles(topic, sortBy)
      //     .then(({ articles }) => this.setState({ articles: articles }))
      //     .catch(err => console.log(err))
      // } else {
      //   getArticlesByTopic(topic)
      //     .then(({ articles }) => this.setState({ articles: articles }))
      //     .catch(err => console.log(err))
      // }
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
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div className="home-articles" articles={articles} topic={topic}>
        <h2>ARTICLES {topic && topic}</h2>
        <ArticlesSortBy handleSortOrder={this.handleSortOrder} />
        <ArticleAddButton className="button article-add" handleArticleAddButton={this.handleArticleAddButton} />
        <ArticleAddForm handleArticleAddForm={this.handleArticleAddForm} displayAddArticle={this.state.displayAddArticle} />
        <ul>
          {articles.map(article => <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Articles