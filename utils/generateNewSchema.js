const fs = require('fs');

const axiosHelper = require('./axiosHelper');
const schemaFile = require('../data/schema.json');

const fetchMultis = async () => {
  const data = await axiosHelper({
    method: 'GET',
    url: '/api/multi/mine',
  });
  return data;
};

const filterMultis = (multis = []) => {
  const filteredMultis = [];
  multis.map((multi) => {
    filteredMultis.push({
      name: multi.data.name,
      subreddits: multi.data.subreddits.map((s) => s.name),
    });
  });
  return filteredMultis;
};

const getSubreddits = (filteredMultis, multisNames) => {
  let subreddits = [];
  filteredMultis.map((filteredMulti) => {
    if (multisNames.includes(filteredMulti.name)) {
      subreddits = [...subreddits, ...filteredMulti.subreddits];
    }
  });
  subreddits = [...new Set(subreddits)].sort();
  return subreddits;
};

const generateNewSchema = async (schema) => {
  const multis = await fetchMultis();
  const filteredMultis = filterMultis(multis);

  const newSchema = schema.map((s) => {
    return { ...s, subreddits: getSubreddits(filteredMultis, s.multisNames) };
  });
  return newSchema;
};

const saveSchemaToFile = (newSchema) => {
  const data = JSON.stringify(newSchema, null, 2);
  fs.writeFileSync('./data/schema.json', data);
  console.log('New Schema created at ./data/schema.json');
};

generateNewSchema(schemaFile).then((res) => saveSchemaToFile(res));
