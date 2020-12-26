const fs = require('fs');

const axiosHelper = require('../axiosHelper');

const filterMultis = require('./filterMultis');
const joinSubreddits = require('./joinSubreddits');

const SCHEMA_TEMPLATE = [
  {
    title: 'dev',
    multisNames: ['1_dev', '1_developer'],
  },
  {
    title: 'business',
    multisNames: ['0_business', '0_entrepreneur', '1_marketing'],
  },
  {
    title: 'life',
    multisNames: ['2_cook', '2_life'],
  },
];

const fetchMultis = async () => {
  const data = await axiosHelper({
    method: 'GET',
    url: '/api/multi/mine',
  });
  return data;
};

const generateNewSchema = async () => {
  const multis = await fetchMultis();
  const filteredMultis = filterMultis(multis);

  const newSchema = SCHEMA_TEMPLATE.map((s) => {
    return { ...s, subreddits: joinSubreddits(filteredMultis, s.multisNames) };
  });
  return newSchema;
};

const saveSchemaToFile = (newSchema) => {
  const data = JSON.stringify(newSchema, null, 2);
  fs.writeFileSync('./data/schema.json', data);
  console.log('New Schema created at ./data/schema.json');
};

// generateNewSchema().then((res) => saveSchemaToFile(res));
generateNewSchema();

module.exports = {
  filterMultis,
  generateNewSchema,
};
