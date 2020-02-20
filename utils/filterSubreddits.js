const SCHEMA = require('./schema.json');

const filterSubreddits = (categories = '') => {
  let subreddits = [];
  SCHEMA.map((s) => {
    if (categories === s.title) {
      subreddits = [...s.subreddits];
    }
  });
  return subreddits;
};

module.exports = filterSubreddits;
