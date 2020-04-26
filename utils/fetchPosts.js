const axiosHelper = require('./axiosHelper');

const fetchPosts = async ({
  after = '',
  limit = 10, // 10
} = {}) => {
  console.log('     Fetching posts...');
  try {
    const data = await axiosHelper({
      method: 'GET',
      url: `/user/guidosantillan01/saved?after=${after}&limit=${limit}`,
    });
    const posts = data.data.children;
    return posts;
  } catch (error) {
    console.log('Error at fetchPosts.js: ', error.response.data.message);
    return [];
  }
};

module.exports = fetchPosts;
