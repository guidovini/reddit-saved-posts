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
// const totalPosts = 30;

const startRoutine = async (totalPosts, categories, postsPerBatch) => {
  console.log('Getting subreddits...');
  const subreddits = filterSubreddits({ categories, SCHEMA });

  console.log('Getting totalPosts...');
  const posts = await getTotalPosts(totalPosts, subreddits);

  console.log('Formatting posts...');
  const formattedPosts = formatPosts(posts, postsPerBatch);

  console.log('Saving posts to file...');
  saveToFile(categories, formattedPosts);

  // console.log(posts);

  // !!
  console.log('Unsaving posts from reddit...');
  unsaveListPosts(posts);
};

startRoutine(totalPosts, categories, postsPerBatch);
