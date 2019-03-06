import React from 'react';

// destructure props
const ArticlesSortBy = ({ handleSortOrder }) => {
  return (

    <div className="articles-sortby">
      <p>Sort by :</p>
      <div>
        <input type="radio" id="created_at" name="articleSortBy" value="created_at" defaultChecked onClick={handleSortOrder} />
        <label htmlFor="created_at">Date</label>
      </div>

      <div>
        <input type="radio" id="comment_count" name="articleSortBy" value="comment_count" onClick={handleSortOrder} />
        <label htmlFor="comment_count">Comments</label>
      </div>

      <div>
        <input type="radio" id="votes" name="articleSortBy" value="votes" onClick={handleSortOrder} />
        <label htmlFor="votes">Votes</label>
      </div>
    </div>
  )
}

export default ArticlesSortBy;