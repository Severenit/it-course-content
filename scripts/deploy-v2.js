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

readDir(pathCourse, async (course) => {
  await fetch(`${DB}/breadcrumbs.json`, {
    method: 'PUT',
    body: JSON.stringify({
      course: 'Главная'
    })
  });

  await fetch(`${DB}/contents/course.json`, {
    method: 'PUT',
    body: JSON.stringify({})
  });
  //
  Object.entries(course).forEach(async (item) => {
    await fs.readFile(path.resolve(item[1], 'config.json'), 'utf8', async (error, data) => {
      await fetch(`${DB}/breadcrumbs/${item[0]}.json`, {
        method: 'PUT',
        body: JSON.stringify(JSON.parse(data).title)
      });

      const { content, landing, ...rest } = JSON.parse(data);
      console.log('####: content', content);
      const lessons = {};
      const homeworks = {};
      const newContent = content.map(({lesson, homework, ...rest}) => {
        lessons[rest.id] = lesson;
        homeworks[rest.id] = homework;
        return rest;
      });

      await fetch(`${DB}/contents/course/${item[0]}.json`, {
        method: 'PUT',
        body: JSON.stringify(rest)
      });
      
      await fetch(`${DB}/contents/content/${item[0]}.json`, {
        method: 'PUT',
        body: JSON.stringify({
          ...rest,
          landing,
          content: newContent
        })
      });

      await fetch(`${DB}/contents/homework/${item[0]}.json`, {
        method: 'PUT',
        body: JSON.stringify(homeworks)
      });

      await fetch(`${DB}/contents/lesson/${item[0]}.json`, {
        method: 'PUT',
        body: JSON.stringify(lessons)
      });
    });
  });
});

