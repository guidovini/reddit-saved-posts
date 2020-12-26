const joinSubreddits = (filteredMultis = [], multisNames = []) => {
  let subreddits = [];
  filteredMultis.forEach((multi) => {
    if (multisNames.includes(multi.name)) {
      subreddits = [...subreddits, ...multi.subreddits];
    }
  });
  subreddits = [...new Set(subreddits)].sort();
  return subreddits;
};

module.exports = joinSubreddits;
