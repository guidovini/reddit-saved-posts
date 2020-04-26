const calculateNextIndex = ({ posts = [], filteredPosts = [] } = {}) => {
  let next = '';

  if (filteredPosts.length === 0) {
    next = posts[posts.length - 1]?.data.name || '';
  } else {
    next = filteredPosts[filteredPosts.length - 1].name || '';
  }

  return next;
};

module.exports = calculateNextIndex;
