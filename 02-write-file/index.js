const readline = require('readline');
const fs = require('fs');
const path = require('path');


let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); 

fs.WriteStream(path.join(__dirname, './', 'result.txt'));

console.log('Введите любой текст');


rl.on('line', (line) => {
  if (line.trim() === 'exit') {
    rl.close();
  } 
  else {
    fs.appendFile(path.join(__dirname, './', 'result.txt'), `${String(line)}\n`, function(error){
      if(error) throw error; 
    });
    console.log ('Введите любой текст');
  }
});

process.on('SIGINT', () => {
  console.log ('Операция была завершена');
  process.exit();
});


rl.on('close', () => {
  console.log ('Операция была завершена');
});
 
