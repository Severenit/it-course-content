const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

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
    fs.readFile(path.resolve(item[1], 'main.json'), 'utf8', async (error, content) => {
      const res = fetch(`https://it-course-84ddd-default-rtdb.firebaseio.com/contents/course/${item[0]}.json`, {
        method: 'PUT',
        body: content
      })
    });

    fs.readFile(path.resolve(item[1], 'plan.json'), 'utf8', async (error, content) => {
      const res = fetch(`https://it-course-84ddd-default-rtdb.firebaseio.com/contents/course/${item[0]}.json`, {
        method: 'PATCH',
        body: JSON.stringify({
          plan: JSON.parse(content)
        })
      })
    })
  })
});

