import React, { Component, Fragment } from 'react'
import { updateArticleVotes } from '../api';

class ArticleVoteWidget extends Component {

  state = {
    articleWidgetVotes: 0,
  }

  handleArticleVote = (event) => {
    const ID = this.props.article_id;
    const inc_votes = +event.target.dataset.vote;
    const body = { inc_votes: inc_votes }

    // render before async API call
    this.setState({ articleWidgetVotes: this.state.articleWidgetVotes + inc_votes })

    updateArticleVotes(ID, body)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <span>Votes : {this.props.articleVotes + this.state.articleWidgetVotes}</span>
        <button onClick={this.handleArticleVote} data-vote={1} className="vote-arrow">&uarr;</button>
        <button onClick={this.handleArticleVote} data-vote={-1} className="vote-arrow">&darr;</button>
      </Fragment>
    )
  }
}

export default ArticleVoteWidget