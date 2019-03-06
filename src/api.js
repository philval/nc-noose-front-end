const DOMAIN = 'http://localhost:9090';

function getArticles() {
  return fetch(`${DOMAIN}/api/articles/`)
    .then(response => response.json())
}

function getArticleByID(id) {
  return fetch(`${DOMAIN}/api/articles/${id}`)
    .then(response => response.json())
}

function getCommentsByArticleByID(id) {
  return fetch(`${DOMAIN}/api/articles/${id}/comments`)
    .then(response => response.json())
}

function getTopics() {
  return fetch(`${DOMAIN}/api/topics`)
    .then(response => response.json())
}

function getArticlesByTopic(topic = '') {
  return fetch(`${DOMAIN}/api/articles/?topic=${topic}`)
    .then(response => response.json())
}

export { getArticles, getArticleByID, getCommentsByArticleByID, getTopics, getArticlesByTopic };
