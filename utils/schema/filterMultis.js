const filterMultis = (multis = []) => {
  return multis.map((multi) => ({
    name: multi.data.name,
    subreddits: multi.data.subreddits.map((s) => s.name),
  }));
};

module.exports = filterMultis;
