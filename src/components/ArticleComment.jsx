import React from 'react';
import CommentDeleteButton from './CommentDeleteButton';
import CommentVoteWidget from './CommentVoteWidget';


const ArticleComment = ({ comment, handleCommentDelete }) => {

  const created_at = new Date(comment.created_at).toDateString();

  return (
    <div className="article-comment">
      <li>
        <p>{created_at} | By : {comment.author}</p>
        <p>{comment.body}</p>
        <CommentVoteWidget comment_id ={comment.comment_id} commentVotes={comment.votes} />
        <CommentDeleteButton handleCommentDelete={handleCommentDelete} id={comment.comment_id} />
        <hr/>
      </li>
    </div>
  )
}

export default ArticleComment;