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
  it('should filter multis correctly', () => {
    const filteredMultis = filterMultis(multis);
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
});
