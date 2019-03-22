import React, { Component, Fragment } from 'react';
import { Link } from '@reach/router';
import { getArticles, postArticle } from '../api';
import ArticlesSortBy from './ArticlesSortBy';
import ArticleAddForm from './ArticleAddForm';
import Sidebar from './Sidebar';
import Button from './Button';

class Articles extends Component {

  state = {
    isLoading: true,
    hasError: false, // TODO rename noArticles    
    articles: [],
    newArticle: { topic: "coding" },
    topic: '',
    sortBy: 'created_at',
    displayAddArticle: false,
  }

  getTheArticles = (topic, sortBy) => {
    getArticles(topic, sortBy)
      .then(({ articles }) => articles.length === 0
        ? this.setState({ hasError: true, articles: [] })
        : this.setState({ isLoading: false, hasError: false, articles: articles }))
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    this.getTheArticles(topic, sortBy)
  }

  componentDidUpdate = (prevProps, prevState) => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    if (prevProps.topic !== this.props.topic || prevState.sortBy !== this.state.sortBy) {
      this.getTheArticles(topic, sortBy)
    }
  }

  handleSortOrder = (event) => {
    const selectedSort = event.target.value;
    this.setState({ sortBy: selectedSort })
  }

  handleArticleAddButton = (event) => {
    this.setState((prevState) => ({ displayAddArticle: !prevState.displayAddArticle }))
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
      .then(({ article }) => this.setState((prevState) => ({
        articles: [article, ...this.state.articles],
        displayAddArticle: !prevState.displayAddArticle
      })
      ))
      .catch(err => console.log(err))
  }

  render() {

    // TODO
    // const { hasError } = this.state
    // if (hasError) return (
    //   <div className="home-articles">
    //     <h1>Error</h1>
    //     <p>Topic does not exist.</p>
    //     <p>Return to the <Link to="/">homepage</Link></p>
    //   </div>
    // )

    const { isLoading, articles, displayAddArticle, hasError } = this.state;
    const { topic } = this.props;

    if (isLoading) return (
      <div className="home-articles">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    )

    return (
      <Fragment>
        <Sidebar className="home-sidebar" />
        <div className="home-articles" articles={articles} topic={topic}>
          <h2>ARTICLES</h2>
          {topic && <p>Topic: {topic}</p>}
          <ArticlesSortBy handleSortOrder={this.handleSortOrder} />
          <hr />
          <Button className="button article-add" handler={this.handleArticleAddButton} label="Post New Article" />

          {displayAddArticle && <ArticleAddForm handleArticleAddFormSubmit={this.handleArticleAddFormSubmit} handleArticleAddFormChange={this.handleArticleAddFormChange} />}
          <hr />
          <ul>
            {articles.map(article =>
              <li key={article.article_id} className="articles-article">
                <div><Link to={`/articles/${article.article_id}`}>{article.title}</Link></div>
                <div>By: {article.author} | Comments: {article.comment_count} | Votes: {article.votes}</div>
              </li>)}
          </ul>
          {hasError && <p>No Articles found for this topic</p>}
        </div>
      </Fragment>
    )
  }
}

export default Articles