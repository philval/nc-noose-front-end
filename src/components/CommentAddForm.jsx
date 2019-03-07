import React from 'react'

const CommentAddForm = ({ handleCommentAddForm }) => {
  return (
    <form id="CommentAddForm" className="comment-add-form" onSubmit={handleCommentAddForm} >
      <label htmlFor="commentUsername">Username</label>
      <input id="commentUsername" type="text" className="w100" />
      <label htmlFor="commentBody">Your Comment</label>
      <textarea id="commentBody" type="textarea" rows="10" className="w100" />
      <input type="submit" />
    </form >
  )
}

export default CommentAddForm