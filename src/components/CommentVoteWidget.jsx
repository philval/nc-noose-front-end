import React, { Component, Fragment } from 'react'
import { updateCommentVotes } from '../api';

class CommentVoteWidget extends Component {

  state = {
    commentWidgetVotes: 0,
  }

  handleCommentVote = (event) => {
    const ID = this.props.comment_id;
    const inc_votes = +event.target.dataset.vote;
    const body = { inc_votes: inc_votes }

    // render before async API call
    this.setState({ commentWidgetVotes: this.state.commentWidgetVotes + inc_votes })

    updateCommentVotes(ID, body)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <span>Votes : {this.props.commentVotes + this.state.commentWidgetVotes}</span>
        <button onClick={this.handleCommentVote} data-vote={1} className="vote-arrow">&uarr;</button>
        <button onClick={this.handleCommentVote} data-vote={-1} className="vote-arrow">&darr;</button>
      </Fragment>
    )
  }
}

export default CommentVoteWidget