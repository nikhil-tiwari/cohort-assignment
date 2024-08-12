// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

const fs = require('fs');

const writeFileFn = (cleanStr) => {
    fs.appendFile('file.txt', `\n${cleanStr}`, 'utf-8', (err, data) => {
        if (err) {
            throw new Error("Error writing file.txt: " + err);
        }
        console.log("Writing file.txt successful");
    })
}

const strCleaner = (str, cb) => {
    let result = '';
    let inSpace = false;

    for (let char of str.trim()) {
        if (char === ' ') {
            if (!inSpace) {
                result += char;
                inSpace = true;
            }
        } else {
            result += char;
            inSpace = false;
        }
    }

    cb(result);
}

strCleaner("     hello     world    my    name   is       raman    ", writeFileFn);