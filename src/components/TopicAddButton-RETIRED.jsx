import React from 'react'

const TopicAddButton = ({ handleTopicAddButton }) => {
  return (
    <button onClick={handleTopicAddButton} className="w100 buttton-topic-add">New Topic</button>
  )
}

export default TopicAddButton