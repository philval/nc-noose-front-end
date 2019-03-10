import React from 'react'

const TopicAddForm = ({ handleTopicAddForm }) => {
  return (
    <form id="TopicAddForm" className="topic-add-form" onSubmit={handleTopicAddForm} >
      <label htmlFor="topicSlug">Short name</label>
      <input id="topicSlug" type="text" className="w100" required />
      <label htmlFor="topicDescription">Long name</label>
      <input id="topicDescription" type="text" className="w100" required />
      <button type="submit" className="w100 buttton-topic-submit" >Submit</button>
    </form >
  )
}

export default TopicAddForm