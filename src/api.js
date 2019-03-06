const BASE_URL = 'http://localhost:9090/api';

// http://localhost:9090/api/articles?sort_by=votes&order=asc

function getArticles(topic, sortBy) {
  let url = BASE_URL + '/articles?';
  if (topic) url += `topic=${topic}`;
  if (sortBy) url += `&sort_by=${sortBy}`
  console.log(url, '<< url')
  return fetch(url)
    .then(response => response.json())
}

function getAllArticles(sortBy) {
  return fetch(`${BASE_URL}/articles?sort_by=${sortBy}`)
    .then(response => response.json())
}

function getArticleByID(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then(response => response.json())
}

function getCommentsByArticleByID(id) {
  return fetch(`${BASE_URL}/articles/${id}/comments`)
    .then(response => response.json())
}

function getTopics() {
  return fetch(`${BASE_URL}/topics`)
    .then(response => response.json())
}

function getArticlesByTopic(topic = '') {
  return fetch(`${BASE_URL}/articles/?topic=${topic}`)
    .then(response => response.json())
}

export { getArticles, getAllArticles, getArticleByID, getCommentsByArticleByID, getTopics, getArticlesByTopic };
