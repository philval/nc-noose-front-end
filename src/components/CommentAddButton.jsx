import React from 'react'

const CommentAddButton = ({ handleCommentAddButton }) => {
  return (
    <button onClick={handleCommentAddButton}>New Comment</button>
  )
}

export default CommentAddButton