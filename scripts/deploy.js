const path = require('path');
const fs = require('fs');

console.log(path.resolve(__dirname, '/course'));

fs.readdir(path.resolve(__dirname, '/course'), (err, files) => {
  console.log(err);

  files.forEach(file => {
    console.log(file);
  });
})
