import React from 'react'

const TopicAddForm = ({ handleTopicAddFormSubmit, handleTopicAddFormChange }) => {
  return (
    <form id="TopicAddForm" className="topic-add-form" onSubmit={handleTopicAddFormSubmit} >
      <label htmlFor="topicSlug">Short name</label>
      <input name="slug" id="topicSlug" type="text" className="w100" required onChange={handleTopicAddFormChange} />
      <label htmlFor="topicDescription">Long name</label>
      <input name="description" id="topicDescription" type="text" className="w100" required onChange={handleTopicAddFormChange} />
      <button type="submit" className="w100 buttton-topic-submit" >Submit</button>
    </form >
  )
}

export default TopicAddForm