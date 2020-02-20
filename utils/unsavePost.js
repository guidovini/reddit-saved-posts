const axiosHelper = require('./axios');

const unsavePost = async (name) => {
  await axiosHelper({
    method: 'POST',
    url: `/api/unsave?id=${name}`,
  });
  return true;
};

module.exports = unsavePost;
