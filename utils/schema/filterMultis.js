// Gets rid of all the information from the multis that we don't need
const filterMultis = (multis = []) => {
  return multis.map((multi) => ({
    name: multi.data.name,
    subreddits: multi.data.subreddits.map((s) => s.name),
  }));
};

module.exports = filterMultis;
