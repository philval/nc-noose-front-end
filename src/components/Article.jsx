import React, { Component } from 'react';
import ArticleComments from './ArticleComments'
import { getArticleByID, deleteArticleByID } from '../api';
import ArticleEdit from './ArticleEdit';
import ArticleDeleteButton from './ArticleDeleteButton';
import { navigate } from '@reach/router';

class Article extends Component {

  state = {
    singleArticle: [],
  }

  componentDidMount = () => {
    const id = this.props.articleID;
    getArticleByID(id)
      .then(({ article }) => this.setState({ singleArticle: article }))
      .catch(err => console.log(err))
  }

  handleArticleEdit = (event) => {
    console.log('handleArticleEdit')
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
    const created_at = new Date(singleArticle.created_at).toString();
    // TODO DD MM YYYY

    return (
      <div className="single-article" singlearticle={singleArticle}>
        <h1>{singleArticle.title}</h1>
        <div>
          {/* <ArticleEdit className="button article-edit" handleArticleEdit={this.handleArticleEdit} /> */}
          <ArticleDeleteButton className="button article-delete" handleArticleDelete={this.handleArticleDelete} />
        </div>
        <p>{created_at} | By: {singleArticle.author} | Topic: {singleArticle.topic}</p>
        <p>{singleArticle.body}</p>
        <p>Comments: {singleArticle.comment_count} | Votes: {singleArticle.votes}</p>
        <ArticleComments articleID={this.props.articleID} />
      </div >

    );
  }
}

export default Article;