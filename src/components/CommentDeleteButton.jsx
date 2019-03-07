import React from 'react'

const CommentDeleteButton = ({ handleCommentDelete, id }) => {
  return (
    <button onClick={handleCommentDelete} data-id={id}>Delete Comment</button>
  )
}

export default CommentDeleteButton