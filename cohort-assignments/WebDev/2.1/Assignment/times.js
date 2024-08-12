/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    const startingTime = new Date();
    let sum = 0;
    for(let i = 0; i < n; i++) {
        sum = sum + i; // random operation
    }
    const currentTime = new Date();
    return currentTime - startingTime;
}


console.log(calculateTime(100)); // 0
console.log(calculateTime(10000)); // 0
console.log(calculateTime(1000000)); // 3
console.log(calculateTime(100000000)); // 74
console.log(calculateTime(10000000000)); // 8649
console.log(calculateTime(10000000000000)); // had to stop, can't wait this long (bad laptop?)
console.log(calculateTime(10000000000000000)); // had to stop, can't wait this long
console.log(calculateTime(10000000000000000000)); // had to stop, can't wait this long
