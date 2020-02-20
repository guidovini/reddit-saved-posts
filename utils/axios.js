const axios = require('axios');

// const getToken = require('./getToken');
const { TOKEN, URL } = require('../constants');

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const axiosHelper = async (config) => {
  try {
    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    console.log('Error at axios.js');
    // console.log(error);
  }
};

module.exports = axiosHelper;
