const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const DB = 'https://it-course-dev-default-rtdb.firebaseio.com';
const pathCourse = path.resolve(__dirname, '..', 'course');

console.log('Start Deploy to Dev');
const readDir = async (pathDir, cb) => {
  fs.readdir(pathDir, (err, files) => {
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
    } else {
      console.error(err);
    }
  });
};

async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

readDir(pathCourse, (course) => {
  Object.entries(course).forEach(async (item) => {
    await fs.readFile(path.resolve(item[1], 'main.json'), 'utf8', async (error, content) => {
      await fetch(`${DB}/breadcrumbs/${item[0]}.json`, {
        method: 'PUT',
        body: JSON.stringify(JSON.parse(content).title)
      });
      await fetch(`${DB}/contents/course/${item[0]}.json`, {
        method: 'PUT',
        body: content
      }).then(async () => {
        await fs.readFile(path.resolve(item[1], 'plan.json'), 'utf8', async (error, content) => {
          const res = await fetch(`${DB}/contents/course/${item[0]}.json`, {
            method: 'PATCH',
            body: JSON.stringify({
              plan: JSON.parse(content)
            })
          });
        });
      });
    });
  });
});

