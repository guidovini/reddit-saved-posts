/*
 * categories @string
 * SCHEMA @array
 * Each element contains "title" @string, "multisNames" @array, "subreddits" @array
 *
 */

const filterSubreddits = ({ categories = '', SCHEMA = [] } = {}) => {
  let subreddits = [];
  SCHEMA.map((s) => {
    if (categories === s.title) {
      subreddits = [...s.subreddits];
    }
  });
  return subreddits;
};

module.exports = filterSubreddits;
