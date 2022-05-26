const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, './secret-folder');



fs.readdir(folder, {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if(file.isFile()) {
        fs.stat(`${folder}/${file.name}`, (error, stats) => {
          if (error) {
            console.log(error);
          }
          else {
            console.log(`${path.parse(file.name).name} - ${path.parse(file.name).ext} - ${stats.size / 1000}kb`);
          }
        });
      }
    });
  }
});
  