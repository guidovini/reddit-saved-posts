/*
 * category @string
 * SCHEMA @array
 * Each element contains "title" @string, "multisNames" @array, "subreddits" @array
 *
 */

const filterSubreddits = (category = '', SCHEMA = []) => {
  console.log('Getting subreddits...');

  let subreddits = [];
  SCHEMA.forEach((s) => {
    if (category === s.title) {
      subreddits = [...s.subreddits];
    }
  });
  return subreddits;
};

module.exports = filterSubreddits;
