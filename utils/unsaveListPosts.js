const unsavePost = require('./unsavePost');

const unsaveListPosts = (posts) => {
  posts.map(({ name }) => unsavePost(name));
  console.log('List of posts was unsaved');
  return true;
};

module.exports = unsaveListPosts;
