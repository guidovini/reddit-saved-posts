const formatPosts = (posts = [], postsPerBatch = 20) => {
  console.log('Formatting posts...');

  return posts.reduce((acc, { permalink, title }, idx) => {
    if (idx >= postsPerBatch) {
      acc = `${acc}\n\n`;
    }
    return `${acc}https://www.reddit.com${permalink} | ${title} \n`;
  }, '');
};

module.exports = formatPosts;
