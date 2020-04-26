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
 * @returns [{}, ...],
*/

const filterPosts = ({ posts = [], subreddits = [] } = {}) => {
  return posts
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
};

module.exports = filterPosts;
