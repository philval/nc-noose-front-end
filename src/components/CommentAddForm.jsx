import React from 'react'

const CommentAddForm = ({ handleCommentAddFormSubmit, handleCommentAddFormChange, handleCommentChange }) => {
  return (
    <form id="CommentAddForm" className="comment-add-form" onSubmit={handleCommentAddFormSubmit} >
      <label htmlFor="commentBody">Your Comment</label>
      <textarea name="body" id="commentBody" type="textarea" rows="10" className="w100" required onChange={handleCommentAddFormChange} />
      <button type="submit" onClick={() => handleCommentChange(1)} >Submit</button>
    </form >
  )
}

export default CommentAddForm