require('dotenv').config();

const axios = require('axios');
const { REDDIT_URL } = require('../constants');

const { TOKEN } = process.env;

const axiosInstance = axios.create({
  baseURL: REDDIT_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

const axiosHelper = async (config) => {
  try {
    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    console.log('Error at axiosHelper.js: ', error.response.data.message);
  }
};

module.exports = axiosHelper;
