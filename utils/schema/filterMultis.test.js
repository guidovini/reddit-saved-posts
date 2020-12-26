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
    expect(filteredMultis).toMatchInlineSnapshot(`
      Array [
        Object {
          "name": "multi1",
          "subreddits": Array [
            "sub1",
            "sub2",
          ],
        },
        Object {
          "name": "multi2",
          "subreddits": Array [
            "sub1",
            "sub2",
          ],
        },
      ]
    `);
  });
});
