const axios = require('axios');

const { USERNAME, PASSWORD, AUTH_BASIC_TOKEN } = require('../constants');

const getToken = async () => {
  try {
    const response = await axios({
      method: 'POST',
      url: `https://www.reddit.com/api/v1/access_token?grant_type=password&username=${USERNAME}&password=${PASSWORD}`,
      headers: {
        Authorization: `Basic ${AUTH_BASIC_TOKEN}`,
      },
    });
    console.log(
      'Identity confirmed. Copy the token below and paste it in the constants file.'
    );
    return response.data.access_token;
  } catch (error) {
    console.log('Could not get auth token. Try again');
  }
};

getToken().then((res) => console.log(res));

module.exports = getToken;
