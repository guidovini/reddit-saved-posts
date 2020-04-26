const unsavePost = require('./unsavePost');

const unsaveListPosts = (posts = []) => {
  console.log('Unsaving posts from reddit...');

  if (posts.length > 0) {
    posts.map(({ name }) => unsavePost(name));
    console.log('List of posts was unsaved');
  } else {
    console.log('No posts found at unsaveListPosts.js');
  }
};

module.exports = unsaveListPosts;
