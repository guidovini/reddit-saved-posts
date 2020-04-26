const filterSubreddits = require('../filterSubreddits');

const categories = 'dev';
const SCHEMA = [
  {
    title: 'dev',
    subreddits: ['subr1', 'subr2', 'subr3'],
  },
  {
    title: 'business',
    subreddits: ['b1', 'b2', 'b3'],
  },
];

describe('filterSubreddits', () => {
  it('should filter correct subreddits', () => {
    expect(filterSubreddits({ categories, SCHEMA })).toEqual([
      'subr1',
      'subr2',
      'subr3',
    ]);
  });

  it('should not filter incorrect subreddits', () => {
    expect(filterSubreddits({ categories, SCHEMA })).not.toEqual([
      'b1',
      'b2',
      'b3',
    ]);
  });

  it('should return empty array when no SCHEMA was provided', () => {
    expect(filterSubreddits({ categories })).toEqual([]);
  });

  it('should return empty array when no categories were provided', () => {
    expect(filterSubreddits({ SCHEMA })).toEqual([]);
  });

  it('should return empty array when no parameters', () => {
    expect(filterSubreddits()).toEqual([]);
  });
});
