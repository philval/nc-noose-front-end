import React, { Component, Fragment } from 'react'
import { Link } from '@reach/router'
import { getArticles, postArticle } from '../api'
import ArticlesSortBy from './ArticlesSortBy'
import ArticleAddForm from './ArticleAddForm'
import Sidebar from './Sidebar'
import Button from './Button'

class Articles extends Component {

  state = {
    isLoading: true,
    hasError: false,
    articles: [],
    topic: '',
    sortBy: 'created_at',
    displayAddArticle: false,
  }

  fetchArticles = (topic, sortBy) => {
    getArticles(topic, sortBy)
      .then(({ articles }) => articles.length === 0
        ? this.setState({ hasError: true, isLoading: false, articles: [] })
        : this.setState({ hasError: false, isLoading: false, articles: articles }))
      .catch(err => console.log(err))
  }

  componentDidMount = () => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    this.fetchArticles(topic, sortBy)
  }

  componentDidUpdate = (prevProps, prevState) => {
    const topic = this.props.topic;
    const sortBy = this.state.sortBy;
    if (prevProps.topic !== topic || prevState.sortBy !== sortBy) {
      this.fetchArticles(topic, sortBy)
    }
  }

  handleSortOrder = (event) => {
    const selectedSort = event.target.value;
    this.setState({ sortBy: selectedSort })
  }

  handleArticleAddButton = (event) => {
    this.setState((prevState) => ({ displayAddArticle: !prevState.displayAddArticle }))
  }

  addArticle = (postBody) => {
    postArticle(postBody)
      .then(({ article }) => this.setState((prevState) => ({
        articles: [article, ...prevState.articles],
        displayAddArticle: !prevState.displayAddArticle
      })
      ))
      .catch(err => console.log(err))
  }

  render() {

    const { isLoading, hasError, articles, displayAddArticle } = this.state;
    const { user, topic } = this.props;

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
        <Sidebar />
        <main className="home-articles" articles={articles} topic={topic}>
          <h2>ARTICLES</h2>
          {topic && <p>Topic: {topic}</p>}
          <ArticlesSortBy handleSortOrder={this.handleSortOrder} />
          <hr />
          <Button className="button article-add" handler={this.handleArticleAddButton} label="Post New Article" />

          {displayAddArticle && <ArticleAddForm addArticle={this.addArticle} user={user} />}
          <hr />
          <ul>
            {articles.map(article =>
              <li key={article.article_id} className="articles-article">
                <h2 className=""><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h2>
                <div className="article-meta">{new Date(article.created_at).toDateString()} | By: {article.author}</div>
                <div className="article-meta">Comments: {article.comment_count} | Votes: {article.votes}</div>
              </li>)}
          </ul>
          {hasError && <p>No Articles found for this topic</p>}
        </main>
      </Fragment>
    )
  }
}

export default Articles