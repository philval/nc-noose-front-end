import React from 'react'
import CommentVoteWidget from './CommentVoteWidget'
import Button from './Button'


const ArticleComment = ({ comment, handleCommentDelete }) => {

  const created_at = new Date(comment.created_at).toDateString();

  return (
    <div className="article-comment">
      <li>
        <p>{created_at} | By : {comment.author}</p>
        <p>{comment.body}</p>
        <CommentVoteWidget comment_id={comment.comment_id} commentVotes={comment.votes} />
        <Button handler={handleCommentDelete} label="Delete Comment" id={comment.comment_id} />
        <hr />
      </li>
    </div>
  )
}

export default ArticleComment;