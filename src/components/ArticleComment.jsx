import React from 'react';

// destructure props
const ArticleComment = ({ comment }) => {

  return (
    <div className="article-comment">
      <li>
        <p>{comment.author} | {comment.created_at}</p>
        <p>{comment.body}</p>
        <p>Votes : {comment.votes}</p>
      </li>
    </div>
  )
}

export default ArticleComment;