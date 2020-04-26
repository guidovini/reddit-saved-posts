const fetchPosts = require('./fetchPosts');
const filterPosts = require('./filterPosts');

const selectedPosts = [];

const getTotalPosts = async (totalPosts = 80, subreddits = [], after = '') => {
  try {
    console.log('     Fetching posts...');
    const posts = await fetchPosts({ after });

    console.log('     Filtering posts by subreddit...');
    const [filteredPosts, next] = filterPosts({ posts, subreddits });

    selectedPosts.push(...filteredPosts);
    console.log('      ', selectedPosts.length);

    if (selectedPosts.length < totalPosts) {
      return getTotalPosts(totalPosts, subreddits, next);
    }

    console.log('     Posts processed: ', selectedPosts.length);
    return selectedPosts;
  } catch (error) {
    console.log(
      'Error at getTotalPosts.js: ',
      'There are probably not enough posts for your request.'
    );
    console.log('      ', selectedPosts.length);
  }
};

module.exports = getTotalPosts;
