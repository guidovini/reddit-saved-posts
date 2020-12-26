const filterMultis = require('./filterMultis');

const multis = [
  {
    data: {
      name: 'multi1',
      subreddits: [
        {
          name: 'sub1',
          otherInfo: 'info',
        },
        {
          name: 'sub2',
          otherInfo: 'info',
        },
      ],
      otherInfo: 'info',
    },
  },
  {
    data: {
      name: 'multi2',
      subreddits: [
        {
          name: 'sub1',
          otherInfo: 'info',
        },
        {
          name: 'sub2',
          otherInfo: 'info',
        },
      ],
      otherInfo: 'info',
    },
  },
];

describe('filterMultis', () => {
  const filteredMultis = filterMultis(multis);

  it('should filter multis correctly', () => {
    expect(filteredMultis).toEqual([
      {
        name: 'multi1',
        subreddits: ['sub1', 'sub2'],
      },
      {
        name: 'multi2',
        subreddits: ['sub1', 'sub2'],
      },
    ]);
  });

  it('should not filter incorrect multis data', () => {
    expect(filteredMultis).not.toEqual([
      {
        name: 'multi1',
        subreddits: ['sub1', 'sub2'],
        otherInfo: 'info',
      },
      {
        name: 'multi2',
        subreddits: ['sub1', 'sub2'],
        otherInfo: 'info',
      },
    ]);
  });

  it('should not filter incorrect nested subreddits data', () => {
    expect(filteredMultis).not.toEqual([
      {
        name: 'multi1',
        subreddits: ['sub1', 'sub2', 'info'],
      },
      {
        name: 'multi2',
        subreddits: ['sub1', 'sub2', 'info'],
      },
    ]);
  });
});
