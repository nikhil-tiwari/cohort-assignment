/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // random task
    }
}

console.log('Starting sleep...');
sleep(3000);  // Halts the thread for 3 seconds
console.log('Sleep over');

let sum = 0;
const currentTime = new Date();
for (let i = 0; i < 1000000000; i++) {
    sum += i;
}
console.log('Time taken by loop:', new Date() - currentTime, 'ms');


