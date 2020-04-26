// Date.now() returns in milliseconds, we need in seconds.
const currentDate = Date.now() / 1000; // in seconds

const dateOffset = 60 * 60 * 24 * 15; // 15 days
const setDate = Math.floor(currentDate) - dateOffset;

/*
 * posts @array {}
 * * data
 * * *  title @string,
        name @string,
        subreddit @string,
        permalink @string,
        created_utc @int,
        score @int,
 * subreddits @array ""
 * @returns [[{}, ...], string ]
*/

const filterPosts = ({ posts = [], subreddits = [] } = {}) => {
  const postsFilteredBySubreddit = posts
    .filter(
      (post) =>
        subreddits.includes(post.data.subreddit) &&
        post.data.created_utc < setDate
    )
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

  let next = '';

  if (postsFilteredBySubreddit.length === 0) {
    next = posts[posts.length - 1]?.data.name || '';
  } else {
    next =
      postsFilteredBySubreddit[postsFilteredBySubreddit.length - 1].name || '';
  }

  return [postsFilteredBySubreddit, next];
};

module.exports = filterPosts;
