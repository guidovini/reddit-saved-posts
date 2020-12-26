const buildSchema = require('./buildSchema');

const filteredMultis = [
  {
    name: 'multi1',
    subreddits: ['sub2', 'sub1', 'sub3'],
  },
  {
    name: 'multi2',
    subreddits: ['sub3', 'sub4'],
  },
];
const schema = [
  {
    title: 'dev',
    multisNames: ['multi1', 'multi2'],
  },
];

describe('buildSchema', () => {
  it('should build schema correctly', () => {
    const newSchema = buildSchema(filteredMultis, schema);
    expect(newSchema).toEqual([
      {
        ...schema[0],
        subreddits: ['sub1', 'sub2', 'sub3', 'sub4'],
      },
    ]);
  });
});
