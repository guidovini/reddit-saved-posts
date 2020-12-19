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
    const subreddits = filterSubreddits({ categories, SCHEMA });
    expect(subreddits).toEqual(['subr1', 'subr2', 'subr3']);
  });

  it('should not filter incorrect subreddits', () => {
    const subreddits = filterSubreddits({ categories, SCHEMA });
    expect(subreddits).not.toEqual(['b1', 'b2', 'b3']);
  });

  it('should return empty array when no SCHEMA was provided', () => {
    const subreddits = filterSubreddits({ categories });
    expect(subreddits).toEqual([]);
  });

  it('should return empty array when no categories were provided', () => {
    const subreddits = filterSubreddits({ SCHEMA });
    expect(subreddits).toEqual([]);
  });

  it('should return empty array when no parameters', () => {
    const subreddits = filterSubreddits();
    expect(subreddits).toEqual([]);
  });
});
