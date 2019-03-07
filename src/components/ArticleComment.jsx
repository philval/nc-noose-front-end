import React from 'react';
import CommentDeleteButton from './CommentDeleteButton';

const ArticleComment = ({ comment, handleCommentDelete }) => {

  // TODO date function and unit test
  const created_at = new Date(comment.created_at).toString();

  return (
    <div className="article-comment">
      <li>
        <p>{comment.author} | {created_at}</p>
        <p>ID : {comment.comment_id}</p>
        <CommentDeleteButton handleCommentDelete={handleCommentDelete} id={comment.comment_id}/>
        <p>{comment.body}</p>
        <p>Votes : {comment.votes}</p>
      </li>
    </div>
  )
}

export default ArticleComment;

// handleCommentDelete={handleCommentDelete}