import React from 'react'

const CommentAddForm = ({ handleCommentAddFormSubmit, handleCommentAddFormChange }) => {
  return (
    <form id="CommentAddForm" className="comment-add-form" onSubmit={handleCommentAddFormSubmit} >
      <label htmlFor="commentUsername">Username</label>
      <input name="author" id="commentUsername" type="text" className="w100" required onChange={handleCommentAddFormChange} />
      <label htmlFor="commentBody">Your Comment</label>
      <textarea name="body" id="commentBody" type="textarea" rows="10" className="w100" required onChange={handleCommentAddFormChange} />
      <button type="submit">Submit</button>
    </form >
  )
}

export default CommentAddForm