import React, { Component } from 'react';
import ArticleComments from './ArticleComments'
import { getArticleByID } from '../api';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import ArticleDelete from './ArticleDelete';


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

  handleArticleAdd = (event) => {
    console.log('handleArticleAdd')
  }

  handleArticleEdit = (event) => {
    console.log('handleArticleEdit')
  }

  handleArticleDelete = (event) => {
    console.log('handleArticleDelete')
  }


  render() {
    // get articleID from props object
    const { singleArticle } = this.state;
    const created_at = new Date(singleArticle.created_at).toString();
    // TODO DD MM YYYY

    return (
      <div className="single-article" singlearticle={singleArticle}>
        <h1>{singleArticle.title}</h1>
        <ArticleAdd className="button article-add" handleArticleAdd={this.handleArticleAdd}/>
        <ArticleEdit className="button article-edit" handleArticleEdit={this.handleArticleEdit}/>
        <ArticleDelete className="button article-delete" handleArticleDelete={this.handleArticleDelete}/>
        <p>{created_at} | By: {singleArticle.author} | Topic: {singleArticle.topic}</p>
        <p>{singleArticle.body}</p>
        <p>Comments: {singleArticle.comment_count} | Votes: {singleArticle.votes}</p>
        <hr />
        <ArticleComments articleID={this.props.articleID} />
      </div>

    );
  }
}

export default Article;