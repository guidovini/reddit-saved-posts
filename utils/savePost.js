const axiosHelper = require('./axiosHelper');

const savePost = async (name) => {
  await axiosHelper({
    method: 'POST',
    url: `/api/save?id=${name}`,
  });
  return true;
};

module.exports = savePost;
