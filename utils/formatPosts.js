const formatPosts = (posts = [], postsPerBatch) => {
  try {
    const formattedPosts = [];
    let formattedPostsLength = 0;

    posts.map(({ permalink, title }) => {
      if (formattedPostsLength >= postsPerBatch) {
        formattedPosts.push('\n\n');
        formattedPostsLength = 0;
      }

      formattedPosts.push(`https://www.reddit.com${permalink} | ${title} \n`);
      formattedPostsLength += 1;
    });

    return formattedPosts.join('');
  } catch (error) {
    console.log('Error at formatPosts.js');
  }
};

module.exports = formatPosts;
