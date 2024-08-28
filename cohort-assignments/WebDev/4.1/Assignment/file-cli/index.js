const fs = require('fs');
const { Command } = require('commander');
const path = require('path');
const program = new Command();

program
  .name('file-cli')
  .description('CLI to do file-based tasks')
  .version('1.0.0');

program
  .command('count-words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    const actualPath = path.join(__dirname, file);
    fs.readFile(actualPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        // Split by any amount of whitespace
        const totalWords = data.trim().split(/\s+/).length;
        console.log(`There are ${totalWords} words in ${file}`);
      }
    });
});


program
  .command('count-lines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    const actualPath = path.join(__dirname, file);
    fs.readFile(actualPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        const lines = data.split(/\r?\n/).length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
});

program.parse();
