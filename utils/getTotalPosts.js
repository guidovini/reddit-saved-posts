const fetchPosts = require('./fetchPosts');
const filterPosts = require('./filterPosts');

const selectedPosts = [];

const getTotalPosts = async (totalPosts = 80, subreddits = [], after = '') => {
  try {
    const posts = await fetchPosts({ after });
    const [filteredPosts, next] = filterPosts(posts, subreddits);
    selectedPosts.push(...filteredPosts);

    if (selectedPosts.length < totalPosts) {
      return getTotalPosts(totalPosts, subreddits, next);
    }

    console.log('Posts processed: ', selectedPosts.length);
    return selectedPosts;
  } catch (error) {
    console.log('Error at getTotalPosts.js');
    console.log('There are probably not enough posts for your request.');
  }
};

module.exports = getTotalPosts;
