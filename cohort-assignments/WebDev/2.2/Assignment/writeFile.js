// Write to a file
// Using the fs library again, try to write to the contents of a file. 
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const writeFileFunction = () => {
    fs.appendFile('file.txt', '\nnew content', 'utf8', (err, data) => {
        if (err) {
            throw new Error("Error writing file.txt: " + err);
        }
        console.log("Writing file.txt successful");
    })
}

writeFileFunction();