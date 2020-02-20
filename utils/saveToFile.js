const fs = require('fs');

const saveToFile = (filename = 'posts', data = []) => {
  fs.writeFileSync(`./generated/${filename}-posts.txt`, data);
  console.log(`New file updated at ${filename}-posts.txt`);
};

module.exports = saveToFile;
