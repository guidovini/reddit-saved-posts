const axiosHelper = require('./axiosHelper');

const unsavePost = async (name, tries = 5) => {
  try {
    await axiosHelper({
      method: 'POST',
      url: `/api/unsave?id=${name}`,
    });
    return true;
  } catch (error) {
    if (tries !== 0) {
      tries -= 1;
      unsavePost(name, tries);
    }
    return false;
  }
};

module.exports = unsavePost;
