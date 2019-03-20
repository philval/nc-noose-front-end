import React from 'react'

const ArticleDeleteButton = ({ handleArticleDelete }) => {
  return (
    <button onClick={handleArticleDelete}>Delete Article</button>
  )
}

export default ArticleDeleteButton