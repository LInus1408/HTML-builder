const fs = require('fs');
const path = require('path');

async function getText() {
  const stream = fs.ReadStream(path.join(__dirname, './', 'text.txt'), 'utf-8');
  let data = '';
  stream.on('data', chunk => data += chunk);
  stream.on('end', () => console.log('End', data));
  stream.on('error', error => console.log('Error', error.message));
}


getText();