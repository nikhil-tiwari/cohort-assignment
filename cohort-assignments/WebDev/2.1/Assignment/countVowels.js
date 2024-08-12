/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let count = 0;
    for (const element of str) {
        if(element === 'a' || element === 'A' || element === 'e' || element === 'E' || element === 'i' || element === 'I' || element === 'o' || element === 'O' || element === 'u' || element === 'U') {
            count = count + 1;
        }
    }
    // str.map(element => {
    //     if(element === 'a' || element === 'A' || element === 'e' || element === 'E' || element === 'i' || element === 'I' || element === 'o' || element === 'O' || element === 'u' || element === 'U') {
    //         count = count + 1;
    //     }
    // });
    return count;
}

console.log(countVowels('hello'));
console.log(countVowels('programming'));
console.log(countVowels('OpenAI'));
console.log(countVowels('rhythm'));
console.log(countVowels('fly'));
console.log(countVowels('chatbot'));
console.log(countVowels(''));
console.log(countVowels('EaSiEr'));
console.log(countVowels('QUIET'));
console.log(countVowels('aEIOU'));
console.log(countVowels('the quick brown fox'));
console.log(countVowels('a e i o u'));
console.log(countVowels('testing spaces'));
console.log(countVowels('Hello, world!'));
console.log(countVowels('Coding is fun!!!'));
console.log(countVowels('Keep smiling, boo.'));