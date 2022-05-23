const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, './secret-folder');



fs.readdir(folder, {withFileTypes: true}, (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if(file.isFile()) {
        let stats = fs.statSync(`${folder}/${file.name}`);
        let fileSizeInBytes = stats.size / 1000;
        console.log(`${path.parse(file.name).name} - ${path.parse(file.name).ext} - ${fileSizeInBytes}kb`);
      }
    });
  }
});
  
