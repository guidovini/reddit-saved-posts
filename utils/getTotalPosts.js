const fetchPosts = require('./fetchPosts');
const filterPosts = require('./filterPosts');
const calculateNextIndex = require('./calculateNextIndex');

const selectedPosts = [];

console.log('Getting totalPosts...');

const getTotalPosts = async (
  numberOfPosts = 80,
  subreddits = [],
  after = ''
) => {
  try {
    const posts = await fetchPosts({ after });
    const filteredPosts = filterPosts({ posts, subreddits });
    const next = calculateNextIndex({ posts, filteredPosts });

    selectedPosts.push(...filteredPosts);
    console.log('      ', selectedPosts.length);

    if (selectedPosts.length < numberOfPosts) {
      return getTotalPosts(numberOfPosts, subreddits, next);
    }

    console.log('     Posts processed: ', selectedPosts.length);
    return selectedPosts;
  } catch (error) {
    console.log('Error at getTotalPosts.js');
  }
};

module.exports = getTotalPosts;
