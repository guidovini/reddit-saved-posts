const joinSubreddits = (filteredMultis = [], multisNames = []) => {
  let subreddits = [];
  filteredMultis.map((multi) => {
    if (multisNames.includes(multi.name)) {
      subreddits = [...subreddits, ...multi.subreddits];
    }
  });
  subreddits = [...new Set(subreddits)].sort();
  return subreddits;
};

module.exports = joinSubreddits;
