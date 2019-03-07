import React from 'react'

const ArticleDelete = ({ handleArticleDelete }) => {
  return (
    <button onClick={handleArticleDelete}>Delete Article</button>
  )
}

export default ArticleDelete