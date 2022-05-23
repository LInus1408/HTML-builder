/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');




async function go() {
  rimraf(path.join(__dirname, './files-copy'), function () {  
    fs.mkdir(path.join(__dirname, './files-copy'), err => {
      if(err) throw err; 
      copyFiles();
    });
  });
}

async function copyFiles() {
  fs.readdir(path.join(__dirname, './files'), {withFileTypes: true}, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if(file.isFile()) {
          fs.copyFile(path.join(__dirname, `./files/${file.name}`),path.join(__dirname, `./files-copy/${file.name}`), err => {
            if(err) throw err;
          });
        }
      });
    }
  });
}


go();
