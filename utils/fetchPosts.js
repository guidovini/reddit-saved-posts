const axiosHelper = require('./axios');

const fetchPosts = async ({
  after = '',
  username = 'guidosantillan01',
  limit = 10 // 10
} = {}) => {
  const data = await axiosHelper({
    method: 'GET',
    url: `/user/${username}/saved?after=${after}&limit=${limit}`
  });
  const posts = data.data.children;
  return posts;
};

module.exports = fetchPosts;