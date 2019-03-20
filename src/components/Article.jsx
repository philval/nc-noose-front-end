import React, { Component, Fragment } from 'react'
import ArticleComments from './ArticleComments'
import { getArticleByID, deleteArticleByID } from '../api'
import { navigate } from '@reach/router'
import Sidebar from './Sidebar'
import ArticleVoteWidget from './ArticleVoteWidget'
import Button from './Button'

class Article extends Component {

  state = {
    singleArticle: {},
  }

  componentDidMount = () => {
    const id = this.props.articleID; // via @reach/router
    getArticleByID(id)
      .then(({ article }) => this.setState({ singleArticle: article }))
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

  render() {
    // get articleID from props object
    const { singleArticle } = this.state;
    const article_id = this.state.singleArticle.article_id;
    const created_at = new Date(singleArticle.created_at).toDateString();

    return (
      <Fragment>
        <div className="single-article" singlearticle={singleArticle}>
          <h1>{singleArticle.title}</h1>
          <div>
            <hr />
            <Button className="button article-delete" handler={this.handleArticleDelete} label="Delete Article" />
            <hr />
          </div>
          <p>{created_at} | By: {singleArticle.author} | Topic: {singleArticle.topic}</p>
          <p>{singleArticle.body}</p>
          <p>Comments: {singleArticle.comment_count} | {<ArticleVoteWidget articleVotes={singleArticle.votes} article_id={article_id} />}</p>
          <ArticleComments articleID={this.props.articleID} />
        </div >
        <Sidebar />
      </Fragment>

    );
  }
}

export default Article;