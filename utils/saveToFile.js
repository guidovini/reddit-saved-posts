const fs = require('fs');
const dir = './generated'

const saveToFile = (filename = 'posts', data = []) => {
  console.log('Saving posts to file...');

  try {
    !fs.existsSync(dir) && fs.mkdirSync(dir);

    if (data.length > 0) {
      fs.writeFileSync(`./generated/${filename}-posts.txt`, data);
      console.log(`New file updated at ${filename}-posts.txt`);
    } else {
      console.log('No file was generated');
    }
  } catch (error) {
    console.log('File was not saved. Error finding directory')
  }
};

module.exports = saveToFile;
