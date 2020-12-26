const fs = require('fs');

const axiosHelper = require('../axiosHelper');

const filterMultis = require('./filterMultis');
const buildSchema = require('./buildSchema');

const SCHEMA_DIR = './data/schema.json';
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
  const newSchema = buildSchema(filteredMultis, SCHEMA_TEMPLATE);
  return newSchema;
};

const saveSchemaToFile = (newSchema) => {
  const data = JSON.stringify(newSchema, null, 2);
  fs.writeFileSync(SCHEMA_DIR, data);
  console.log('New Schema created at ' + SCHEMA_DIR);
};

generateNewSchema()
  .then((res) => saveSchemaToFile(res))
  .catch((err) => console.log(err));
