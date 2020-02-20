const filterPosts = (posts = [], subreddits = []) => {
  const postsFilteredBySubreddit = [];
  let next = '';

  posts.map((post) =>
    subreddits.includes(post.data.subreddit)
      ? postsFilteredBySubreddit.push(post)
      : null
  );

  if (postsFilteredBySubreddit.length === 0) {
    next = posts[posts.length - 1].data.name;
  } else {
    next =
      postsFilteredBySubreddit[postsFilteredBySubreddit.length - 1].data.name;
  }

  const filteredPosts = postsFilteredBySubreddit
    // .filter((post) => post.data.subreddit === subreddit)
    .map(
      ({
        data: { title, name, subreddit, permalink, created_utc, score },
      }) => ({
        title,
        name,
        subreddit,
        permalink,
        created_utc,
        score,
      })
    );

  return [filteredPosts, next];
};

module.exports = filterPosts;
