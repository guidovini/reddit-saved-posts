const fs = require('fs');

const saveToFile = (filename = 'posts', data = []) => {
  if (data.length > 0) {
    fs.writeFileSync(`./generated/${filename}-posts.txt`, data);
    console.log(`New file updated at ${filename}-posts.txt`);
  } else {
    console.log('No file was generated');
  }
};

module.exports = saveToFile;
