const joinSubreddits = require('./joinSubreddits');

const buildSchema = (filteredMultis = [], schema = []) => {
  return schema.map((category) => ({
    ...category,
    subreddits: joinSubreddits(filteredMultis, category.multisNames),
  }));
};

module.exports = buildSchema;
