// Reading the contents of a file
// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

const readFileFunction = () => {
    fs.readFile('file.txt', 'utf8', (err, data) => {
        if(err) {
            throw new Error("Error reading file", err);
        }
        console.log(data);
    })
}

readFileFunction();

let sum = 0;
const currentTime = new Date();
for(let i = 0 ; i < 100000000000 ; i++) {
    sum = sum + i;
}
console.log(new Date() - currentTime); // 87527 for 10^11