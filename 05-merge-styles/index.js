/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');


const folder = path.join(__dirname, './styles');



async function getStyles() {
  let data = '';
  fs.readdir(folder, {withFileTypes: true}, (err, files) => {
    if (err)
      console.log(err);
    else {
      files.forEach(file => {
        if((file.isFile() == true) && (path.parse(file.name).ext == '.css')) {
          let stream = fs.createReadStream(path.join(__dirname, `./styles/${file.name}`), 'utf-8');
          stream.on('data', chunk => data += chunk);
          stream.on('end', () => {
            fs.writeFile(path.join(__dirname, './project-dist/bundle.css'), data, function(error){
              if(error) throw error; 
            });
          });
          stream.on('error', error => console.log('Error', error.message));
        }

      });
    }
  });
}

getStyles();

// fs.unlink(path.join(__dirname, './project-dist/bundle.css'), function(err){

// });