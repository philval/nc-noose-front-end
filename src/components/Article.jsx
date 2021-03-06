import React, { Component, Fragment } from 'react'
import ArticleComments from './ArticleComments'
import { getArticleByID, deleteArticleByID } from '../api'
import { navigate, Link } from '@reach/router'
import Sidebar from './Sidebar'
import ArticleVoteWidget from './ArticleVoteWidget'
import Button from './Button'

class Article extends Component {

  state = {
    singleArticle: {},
    commentCount: 0,
    hasError: false,
  }

  componentDidMount = () => {
    const id = this.props.articleID; // via @reach/router
    getArticleByID(id)
      .then(({ article }) => !article ? this.setState({ hasError: true }) : this.setState({ singleArticle: article, commentCount: article.comment_count }))
      .catch(err => console.log(err))
  }

  handleArticleDelete = (event) => {
    const ID = this.state.singleArticle.article_id;
    deleteArticleByID(ID)
      .then(() => {
        navigate('/');
      })
      .catch(err => console.log(err));
  }

  // optimistic rendering commentCount
  handleCommentChange = (countChange) => {
    this.setState({ commentCount: +this.state.commentCount + countChange }) // TODO fn prevState
  }

  render() {
    const { hasError } = this.state
    if (hasError) return (
      <div className="single-article">
        <h1>Error</h1>
        <p>Article does not exist.</p>
        <p>Return to the <Link to="/">homepage</Link></p>
      </div>
    )

    // get articleID from props object
    const user = this.props.user;
    const { singleArticle, commentCount } = this.state;
    const article_id = singleArticle.article_id;
    const created_at = new Date(singleArticle.created_at).toDateString();

    return (
      <Fragment>
        <article className="single-article" singlearticle={singleArticle}>
          <h2>{singleArticle.title}</h2>
          <div>
            <hr />
            {singleArticle.author === user && <Button className="button article-delete" handler={this.handleArticleDelete} label="Delete Article" />}
            <hr />
          </div>
          <p className="article-meta">{created_at} | By: {singleArticle.author} | Topic: {singleArticle.topic}</p>
          <p>{singleArticle.body}</p>
          <p>Comments: {commentCount} | {<ArticleVoteWidget articleVotes={singleArticle.votes} article_id={article_id} />}</p>
          <ArticleComments articleID={this.props.articleID} user={user} handleCommentChange={this.handleCommentChange} />
        </article >
        <Sidebar />
      </Fragment>

    );
  }
}

export default Article;