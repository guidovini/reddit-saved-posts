const axiosHelper = require('./axios');

const fetchMultis = async () => {
  const data = await axiosHelper({
    method: 'GET',
    url: `/api/multi/mine`
  });
  return data;
};

module.exports = fetchMultis;
