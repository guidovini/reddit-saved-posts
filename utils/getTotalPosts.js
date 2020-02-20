const fetchPosts = require('./fetchPosts');
const filterPosts = require('./filterPosts');

let selectedPosts = [];

const getTotalPosts = async (totalPosts = 80, subreddits = [], after = '') => {
  const posts = await fetchPosts({ after });
  const [filteredPosts, next] = filterPosts(posts, subreddits);
  selectedPosts.push(...filteredPosts);

  if (selectedPosts.length < totalPosts) {
    return getTotalPosts(totalPosts, subreddits, next);
  }

  console.log('Posts processed: ', selectedPosts.length);
  return selectedPosts;
};

module.exports = getTotalPosts;
