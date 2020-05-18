const isEndOfBatch = (idx, postsPerBatch) => {
  const isMultipleOfPostsPerBatch = idx !== 0 && idx % postsPerBatch === 0;
  const hasReachPostsPerBatch = idx === postsPerBatch;

  return isMultipleOfPostsPerBatch || hasReachPostsPerBatch;
};

const formatPosts = (posts = [], postsPerBatch = 20) => {
  console.log('Formatting posts...');

  return posts.reduce((acc, { permalink, title }, idx) => {
    if (isEndOfBatch(idx, postsPerBatch)) {
      acc += '\n\n';
    }
    const postText = `https://www.reddit.com${permalink} | ${title}`;

    return `${acc + postText} \n`;
  }, '');
};

module.exports = formatPosts;
