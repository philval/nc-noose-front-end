const BASE_URL = 'http://localhost:9090/api';

function getTopics() {
  return fetch(`${BASE_URL}/topics`)
    .then(response => response.json())
}

function postTopic (body) {
  return fetch(`${BASE_URL}/topics`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
}

function getArticles(topic, sortBy) {
  let url = BASE_URL + '/articles?';
  if (topic) url += `topic=${topic}`;
  if (sortBy) url += `&sort_by=${sortBy}`
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

function postArticle(body) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
}

function deleteArticleByID(ID) {
  return fetch(`${BASE_URL}/articles/${ID}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })
}

function getCommentsByArticleByID(id) {
  return fetch(`${BASE_URL}/articles/${id}/comments`)
    .then(response => response.json())
}

function getArticlesByTopic(topic = '') {
  return fetch(`${BASE_URL}/articles/?topic=${topic}`)
    .then(response => response.json())
}

function postComment(article_id, body) {
  return fetch(`${BASE_URL}/articles/${article_id}/comments`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
}

// DELETE /api/comments/:comment_id
function deleteCommentByID(ID) {
  return fetch(`${BASE_URL}/comments/${ID}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    }
  })
}

function updateArticleVotes(ID, body) {
  return fetch(`${BASE_URL}/articles/${ID}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
}

function updateCommentVotes (ID, body) {
  console.log('you voted !');
  return fetch(`${BASE_URL}/comments/${ID}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
}

// TODO tidy up
export {
  getArticles,
  getAllArticles,
  getArticleByID,
  getCommentsByArticleByID,
  getTopics,
  postTopic,
  getArticlesByTopic,
  postArticle,
  deleteArticleByID,
  postComment,
  deleteCommentByID,
  updateArticleVotes,
  updateCommentVotes
};
