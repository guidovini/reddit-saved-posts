const axiosHelper = require('./axios');

const savePost = async (postName) => {
  await axiosHelper({
    method: 'POST',
    url: `/api/save?id=${postname}`
  });
  return true;
};

module.exports = savePost;
