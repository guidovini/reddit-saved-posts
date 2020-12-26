const fs = require('fs');
const dir = './generated';

const saveToFile = (category = 'unnamed', data = []) => {
  console.log('Saving posts to file...');

  try {
    !fs.existsSync(dir) && fs.mkdirSync(dir);

    if (data.length > 0) {
      fs.writeFileSync(`./generated/${category}-posts.txt`, data);
      console.log(`New file updated at ${category}-posts.txt`);
    } else {
      console.log('No file was generated');
    }
  } catch (error) {
    console.log('File was not saved. Error finding directory');
  }
};

module.exports = saveToFile;
