const formatPosts = require('../formatPosts');

const posts = [
  {
    title: 'react title',
    subreddit: 'react',
    created_utc: 150000000,
    name: 'react name',
    permalink: '/react_permalink',
    score: 666,
    otherInfo: 'other',
  },
  {
    title: 'seo title',
    subreddit: 'seo',
    created_utc: 150000000,
    name: 'seo name',
    permalink: '/seo_permalink',
    score: 666,
    otherInfo: 'other',
  },
  {
    title: 'js title',
    subreddit: 'js',
    created_utc: 150000000,
    name: 'js name',
    permalink: '/js_permalink',
    score: 666,
    otherInfo: 'other',
  },
  {
    title: 'react title 1',
    subreddit: 'react',
    created_utc: 150000000,
    name: 'react name',
    permalink: '/react_permalink',
    score: 666,
    otherInfo: 'other',
  },
  {
    title: 'seo title 1',
    subreddit: 'seo',
    created_utc: 150000000,
    name: 'seo name',
    permalink: '/seo_permalink',
    score: 666,
    otherInfo: 'other',
  },
  {
    title: 'js title 1',
    subreddit: 'js',
    created_utc: 150000000,
    name: 'js name',
    permalink: '/js_permalink',
    score: 666,
    otherInfo: 'other',
  },
  {
    title: 'dev title',
    subreddit: 'dev',
    created_utc: 150000000,
    name: 'dev name',
    permalink: '/dev_permalink',
    score: 666,
    otherInfo: 'other',
  },
];

describe('formatPosts', () => {
  it('should format posts correctly', () => {
    const formattedPosts = formatPosts(posts);

    const expectedValues =
      'https://www.reddit.com/react_permalink | react title \nhttps://www.reddit.com/seo_permalink | seo title \nhttps://www.reddit.com/js_permalink | js title \n';

    expect(formattedPosts).toMatch(expectedValues);
  });

  it('should return empty string on empty posts input', () => {
    expect(formatPosts([])).toMatch('');
  });

  it('should format posts correctly depending on the batch size', () => {
    const formattedPosts = formatPosts(posts, 2);

    const expectedValues =
      'https://www.reddit.com/react_permalink | react title \nhttps://www.reddit.com/seo_permalink | seo title \n\n\nhttps://www.reddit.com/js_permalink | js title \nhttps://www.reddit.com/react_permalink | react title 1 \n\n\nhttps://www.reddit.com/seo_permalink | seo title 1 \nhttps://www.reddit.com/js_permalink | js title 1 \n\n\nhttps://www.reddit.com/dev_permalink | dev title \n';

    expect(formattedPosts).toMatch(expectedValues);
  });

  it('should format posts correctly if postsPerBatch is multiple of posts.length', () => {
    const formattedPosts = formatPosts(posts, 2);

    const expectedValues =
      'https://www.reddit.com/react_permalink | react title \nhttps://www.reddit.com/seo_permalink | seo title \n\n\nhttps://www.reddit.com/js_permalink | js title \nhttps://www.reddit.com/react_permalink | react title 1 \n\n\nhttps://www.reddit.com/seo_permalink | seo title 1 \nhttps://www.reddit.com/js_permalink | js title 1 \n\n\n';

    expect(formattedPosts).toMatch(expectedValues);
  });
});
