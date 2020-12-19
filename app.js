const filterSubreddits = require('./utils/filterSubreddits');
const getTotalPosts = require('./utils/getTotalPosts');
const formatPosts = require('./utils/formatPosts');
const saveToFile = require('./utils/saveToFile');
const unsaveListPosts = require('./utils/unsaveListPosts');

const SCHEMA = require('./data/schema.json');

const categories = 'dev'; // ['dev', 'business', 'life']
const batch = 5;
const postsPerBatch = 20;
const totalPosts = batch * postsPerBatch;

const startRoutine = async (totalPosts, categories, postsPerBatch) => {
  const subreddits = filterSubreddits(categories, SCHEMA);
  const posts = await getTotalPosts(totalPosts, subreddits);
  const formattedPosts = formatPosts(posts, postsPerBatch);

  saveToFile(categories, formattedPosts);
  // unsaveListPosts(posts); // !!
};

startRoutine(totalPosts, categories, postsPerBatch);
