const fetchPosts = require('./fetchPosts');
const filterPosts = require('./filterPosts');

const getFilteredPosts = async ({ after = '', subreddits } = {}) => {
  const posts = await fetchPosts({ after });
  return filterPosts(posts, subreddits);
};

module.exports = getFilteredPosts;
