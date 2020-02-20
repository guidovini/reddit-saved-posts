const currentDate = Date.now() / 1000; // in seconds
// Date.now() returns in milliseconds, we need in seconds.

const dateOffset = 60 * 60 * 24 * 15; // 15 days
const setDate = Math.floor(currentDate) - dateOffset;

const filterPosts = (posts = [], subreddits = []) => {
  const postsFilteredBySubreddit = [];
  let next = '';

  posts.map((post) => {
    subreddits.includes(post.data.subreddit) && post.data.created_utc < setDate
      ? postsFilteredBySubreddit.push(post)
      : null;
  });

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
