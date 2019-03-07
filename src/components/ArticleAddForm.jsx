import React from 'react'
import Topics from './Topics'

const ArticleAddForm = ({ handleArticleAddForm }) => {
  return (
    <form id="articleAddForm" className="article-add-form" onSubmit={handleArticleAddForm} >
      <label htmlFor="articleTitle">Title</label>
      <input id="articleTitle" type="text" className="w100" />
      <label htmlFor="articleTopic">Topic</label>
      <Topics />
      <label htmlFor="articleUsername">Username</label>
      <input id="articleUsername" type="text" className="w100" />
      <label htmlFor="articleBody">Content</label>
      <textarea id="articleBody" type="textarea" rows="10" className="w100" />
      <input type="submit" />
    </form >
  )
}

export default ArticleAddForm

// Request body accepts
// an object containing the following properties:

// title
// body
// topic
// username

// Responds with
// the posted article