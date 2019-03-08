import React, { Component, Fragment } from 'react'
import { updateArticleVotes } from '../api';

// const ArticleVoteWidget = ({ handleArticleVote, articleVotes }) => {
class ArticleVoteWidget extends Component {

  state = {
    articleWidgetVotes: 0,
  }

  componentDidMount = () => {
    const articleWidgetVotes = this.props.articleVotes;
    // inherit widget votes from article votes for temporary rendering
    this.setState({ articleWidgetVotes: articleWidgetVotes })
  }

  handleArticleVote = (event) => {
    const ID = this.props.article_id;
    const inc_votes = +event.target.dataset.vote;
    const body = { inc_votes: inc_votes }
    this.setState({ articleWidgetVotes: this.state.articleWidgetVotes + inc_votes })

    updateArticleVotes(ID, body)
      .then(({ article }) => console.log(article))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <span>Votes : {this.state.articleWidgetVotes}</span>
        <button onClick={this.handleArticleVote} data-vote={1} className="vote-arrow">&uarr;</button>
        <button onClick={this.handleArticleVote} data-vote={-1} className="vote-arrow">&darr;</button>
      </Fragment>
    )
  }
}

export default ArticleVoteWidget