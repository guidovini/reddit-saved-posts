const filterSubreddits = require('./utils/filterSubreddits');
const getTotalPosts = require('./utils/getTotalPosts');
const formatPosts = require('./utils/formatPosts');
const saveToFile = require('./utils/saveToFile');
const unsaveListPosts = require('./utils/unsaveListPosts');

const SCHEMA = require('./data/schema.json');

const category = 'dev'; // available categories: 'dev', 'business', 'life'
const batch = 5;
const postsPerBatch = 20;
const numberOfPosts = batch * postsPerBatch;

const startRoutine = async (numberOfPosts, category, postsPerBatch) => {
  const subreddits = filterSubreddits(category, SCHEMA);
  const posts = await getTotalPosts(numberOfPosts, subreddits);
  const formattedPosts = formatPosts(posts, postsPerBatch);

  saveToFile(category, formattedPosts);
  unsaveListPosts(posts); // !!
};

startRoutine(numberOfPosts, category, postsPerBatch);
