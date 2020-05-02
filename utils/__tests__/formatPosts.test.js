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
      'https://www.reddit.com/react_permalink | react title \nhttps://www.reddit.com/seo_permalink | seo title \n\n\nhttps://www.reddit.com/js_permalink | js title \n';

    expect(formattedPosts).toMatch(expectedValues);
  });
});
