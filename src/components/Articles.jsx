import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { getArticles, postArticle } from '../api';
import ArticlesSortBy from './ArticlesSortBy';
import ArticleAddButton from './ArticleAddButton';
import ArticleAddForm from './ArticleAddForm';
import Sidebar from './Sidebar';

class Articles extends Component {

  state = {
    articles: [],
    newArticle: { topic: "coding" },
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

  handleArticleAddFormChange = (event) => {
    let newArticle = this.state.newArticle;
    newArticle[event.target.name] = event.target.value;
    this.setState({ newArticle })
  }

  handleArticleAddFormSubmit = (event) => {
    event.preventDefault()
    const postBody = this.state.newArticle;

    postArticle(postBody)
      .then(({ article }) => this.setState({ articles: [article, ...this.state.articles] }))
      .catch(err => console.log(err))

    const displayAddArticle = !this.state.displayAddArticle; // toggle
    this.setState({ displayAddArticle: displayAddArticle })
  }

  // TODO h2 : <span> | Topic: </span>
  render() {
    const { articles, displayAddArticle } = this.state;
    const { topic } = this.props;
    return (
      <Fragment>
        <Sidebar className="home-sidebar" />
        <div className="home-articles" articles={articles} topic={topic}>
          <h2>ARTICLES {topic && topic}</h2>
          <ArticlesSortBy handleSortOrder={this.handleSortOrder} />
          <hr />
          <ArticleAddButton className="button article-add" handleArticleAddButton={this.handleArticleAddButton} />
          {displayAddArticle && <ArticleAddForm handleArticleAddFormSubmit={this.handleArticleAddFormSubmit} handleArticleAddFormChange={this.handleArticleAddFormChange} />}
          <hr />
          <ul>
            {articles.map(article => <li key={article.article_id}><Link to={`/articles/${article.article_id}`}>{article.title}</Link> | {article.votes} votes</li>)}
          </ul>
        </div>
      </Fragment>
    )
  }
}

export default Articles