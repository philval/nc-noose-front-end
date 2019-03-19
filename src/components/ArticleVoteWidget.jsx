import React, { Component, Fragment } from 'react'
import { updateArticleVotes } from '../api';

class ArticleVoteWidget extends Component {

  state = {
    articleWidgetVotes: 0,
  }

  handleArticleVote = (inc_votes) => {
    const ID = this.props.article_id;

    // render before async API call
    this.setState({ articleWidgetVotes: this.state.articleWidgetVotes + inc_votes })

    updateArticleVotes(ID, { inc_votes: inc_votes })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <span>Votes : {this.props.articleVotes + this.state.articleWidgetVotes}</span>
        <button onClick={() => this.handleArticleVote(1)} disabled={this.state.articleWidgetVotes === 1} className="vote-arrow">&uarr;</button>
        <button onClick={() => this.handleArticleVote(-1)} disabled={this.state.articleWidgetVotes === -1} className="vote-arrow">&darr;</button>
      </Fragment>
    )
  }
}

export default ArticleVoteWidget