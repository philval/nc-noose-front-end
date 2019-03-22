import React from 'react'
import Topics from './Topics'

const ArticleAddForm = ({ handleArticleAddFormSubmit, handleArticleAddFormChange }) => {
  return (
    <form id="articleAddForm" className="article-add-form" onSubmit={handleArticleAddFormSubmit} >
      <label htmlFor="articleTitle">Title</label>
      <input name="title" id="articleTitle" type="text" className="w100" required onChange={handleArticleAddFormChange} />
      <label htmlFor="articleTopic">Please select a topic</label>
      <Topics handleArticleAddFormChange={handleArticleAddFormChange} />
      <label htmlFor="articleBody">Content</label>
      <textarea name="body" id="articleBody" type="textarea" rows="10" className="w100" required onChange={handleArticleAddFormChange} />
      <button type="submit">Submit</button>
    </form >
  )
}

export default ArticleAddForm