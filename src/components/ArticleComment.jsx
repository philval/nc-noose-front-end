import React from 'react';

// destructure props
const ArticleComment = ({ comment }) => {

  // TODO date function and unit test
  const created_at = new Date(comment.created_at).toString();

  return (
    <div className="article-comment">
      <li>
        <p>{comment.author} | {created_at}</p>
        <p>{comment.body}</p>
        <p>Votes : {comment.votes}</p>
      </li>
    </div>
  )
}

export default ArticleComment;