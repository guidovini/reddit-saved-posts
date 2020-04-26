const axios = require('axios');
const fs = require('fs');

const { USERNAME, PASSWORD, AUTH_BASIC_TOKEN } = require('../../constants');

const saveToken = (token = '') => {
  fs.writeFile('./.env', `TOKEN=${token}`, (err) => {
    if (err) throw err;
    console.log('Token saved');
  });
};

const getToken = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://www.reddit.com/api/v1/access_token?grant_type=password&username=${USERNAME}&password=${PASSWORD}`,
      headers: {
        Authorization: `Basic ${AUTH_BASIC_TOKEN}`,
      },
    });
    const token = response.data.access_token;
    saveToken(token);
    return token;
  } catch (error) {
    console.log('Could not get auth token. Try again');
    return '';
  }
};

getToken();

module.exports = getToken;
