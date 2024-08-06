const crypto = require('crypto');

// assignment 1: 

// Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

const calcHash1 = (prefix) => {
    let valid = 0;
    while(true) {
        let validstr = valid.toString();
        let hash = crypto.createHash('sha256').update(validstr).digest('hex');
        if(hash.startsWith(prefix)) {
            return valid.toString();
        }
        valid++;
    }
}

const string1 = calcHash1('00000');
console.log(string1);

// sssignment 2:

// What if I ask you that the input string should start with 100xdevs ? How would the code change?

const calcHash2 = (prefix) => {
    let valid = 0;
    while(true) {
        let validstr = '100xdevs' + valid.toString();
        let hash = crypto.createHash('sha256').update(validstr).digest('hex');
        if(hash.startsWith(prefix)) {
            return valid.toString();
        }
        valid++;
    }
}

const string2 = calcHash2('00000');
console.log(string2);

// assignment 3: 

// What if I ask you to find a nonce for the following input - 
// "harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10"

const calcHash3 = (prefix) => {
    let valid = 0;
    while(true) {
        let validstr = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10` + valid.toString();
        let hash = crypto.createHash('sha256').update(validstr).digest('hex');
        if(hash.startsWith(prefix)) {
            return valid.toString();
        }
        valid++;
    }
}

const string3 = calcHash3('00000');
console.log(string3);