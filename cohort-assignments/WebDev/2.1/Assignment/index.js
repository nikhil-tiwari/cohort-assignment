// promisified version of setTimeout
const setTimeoutPrommise = (cb, delay, ...args) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
            try {
                const data = cb(...args);
                resolve(data);
            } catch(err) {
                reject(err)
            }
        }, delay)
    })
  }
  
  const sum = (a, b) => a+b;
  const delaySum = setTimeoutPrommise(sum, 2000, 6, 7)
  .then((data) => console.log(data))
  .catch((err) => conosle.log(err));



// promisified version of fetch
const fetchPromise = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url).then((data) => resolve(data.json())).catch((err) => reject(err));
    })
}

const url = "https://api.github.com/users/hkirat";
const fetchedData = fetchPromise(url).then((data) => console.log(data)).catch((err) => console.log(err));


// promisified version of fs.readfile
const fs = require("fs");

const readFilePromise = (path, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, encoding, (err, data) => {
            if (err) {
              return reject(err);
            }
            resolve(data);
          });
    })
}

const readFileData = readFilePromise('./file..txt', 'utf-8').then((data) => console.log(data)).catch((err) => console.log(err));

  