const joinSubreddits = require('./joinSubreddits');

const filteredMultis = [
  {
    name: 'multi1',
    subreddits: ['sub2', 'sub1', 'sub5'],
  },
  {
    name: 'multi2',
    subreddits: ['sub3', 'sub4'],
  },
  {
    name: 'multi3',
    subreddits: ['sub5', 'sub6', 'sub2'],
  },
];

const multiNames = ['multi1', 'multi3'];

describe('joinSubreddits', () => {
  it('should join subreddits correctly', () => {
    const subreddits = joinSubreddits(filteredMultis, multiNames);
    expect(subreddits).toEqual(['sub1', 'sub2', 'sub5', 'sub6']);
  });
});
