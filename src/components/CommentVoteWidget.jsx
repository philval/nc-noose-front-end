import React, { Component, Fragment } from 'react'
import { updateCommentVotes } from '../api';

class CommentVoteWidget extends Component {

  state = {
    commentWidgetVotes: 0,
  }

  handleCommentVote = (inc_votes) => {
    const ID = this.props.comment_id;

    // render before async API call
    this.setState({ commentWidgetVotes: this.state.commentWidgetVotes + inc_votes })

    updateCommentVotes(ID, { inc_votes: inc_votes })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <span>Votes : {this.props.commentVotes + this.state.commentWidgetVotes}</span>
        <button onClick={() => this.handleCommentVote(1)} disabled={this.state.commentWidgetVotes === 1} className="vote-arrow">&uarr;</button>
        <button onClick={() => this.handleCommentVote(-1)} disabled={this.state.commentWidgetVotes === -1} className="vote-arrow">&darr;</button>
      </Fragment>
    )
  }
}

export default CommentVoteWidget