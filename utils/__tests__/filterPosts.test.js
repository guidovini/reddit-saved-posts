const filterPosts = require('../filterPosts');

const posts = [
  {
    data: {
      title: 'react title',
      subreddit: 'react',
      created_utc: 150000000,
      name: 'react name',
      permalink: 'react permalink',
      score: 666,
      otherInfo: 'other',
    },
  },
  {
    data: {
      title: 'seo title',
      subreddit: 'seo',
      created_utc: 150000000,
      name: 'seo name',
      permalink: 'seo permalink',
      score: 666,
      otherInfo: 'other',
    },
  },
  {
    data: {
      title: 'js title',
      subreddit: 'js',
      created_utc: 150000000,
      name: 'js name',
      permalink: 'js permalink',
      score: 666,
      otherInfo: 'other',
    },
  },
];
const subreddits = ['react', 'js', 'webdev'];

describe('filterPosts', () => {
  it('should filter posts', () => {
    const expectedValues = [
      {
        title: 'react title',
        subreddit: 'react',
        created_utc: 150000000,
        name: 'react name',
        permalink: 'react permalink',
        score: 666,
      },
      {
        title: 'js title',
        subreddit: 'js',
        created_utc: 150000000,
        name: 'js name',
        permalink: 'js permalink',
        score: 666,
      },
    ];

    expect(filterPosts({ posts, subreddits })).toEqual(expectedValues);
  });

  it('should not return more values than requested', () => {
    const expectedValues = [
      {
        title: 'react title',
        subreddit: 'react',
        created_utc: 150000000,
        name: 'react name',
        permalink: 'react permalink',
        score: 666,
        otherInfo: 'other',
      },
      {
        title: 'js title',
        subreddit: 'js',
        created_utc: 150000000,
        name: 'js name',
        permalink: 'js permalink',
        score: 666,
        otherInfo: 'other',
      },
    ];
    expect(filterPosts({ posts, subreddits })).not.toEqual(expectedValues);
  });

  it('should return empty array with no parameters', () => {
    expect(filterPosts()).toEqual([]);
  });
});
