const path = require('path');
const fs = require('fs');

const pathCourse = path.resolve(__dirname, '..', 'course');
console.log(pathCourse);

const readDir = async (pathDir, cb) => {
  fs.readdir(pathDir, (err, files) => {
    console.log(err);
    const course = {};
    if (!err) {
      files.forEach(file => {
        const pathFile = path.resolve(pathDir, file);

        if (fs.lstatSync(pathFile).isDirectory()) {
          course[file] = pathFile;
        } else {
          // console.log(`####: file ${pathDir} `, file);
        }
      });
      cb && cb(course);
    }
  });
}

readDir(pathCourse, (course) => {
  Object.entries(course).forEach(item => {
    fs.readFile(path.resolve(item[1], 'main.json'), 'utf8', (error, content) => {
      console.log('####: c', item[0]);
      console.log('####: c', content);
    })
  })
});

