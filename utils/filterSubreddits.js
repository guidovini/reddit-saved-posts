/*
 * category @string
 * SCHEMA @array
 * Each element contains "title" @string, "multisNames" @array, "subreddits" @array
 *
 */

const filterSubreddits = (category = '', SCHEMA = []) => {
  console.log('Getting subreddits...');
  return SCHEMA.find((s) => s.title === category)?.subreddits || [];
};

module.exports = filterSubreddits;
