/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max = -Infinity;
    numbers.forEach(element => {
        max = Math.max(max, element);
    });
    return max === -Infinity ? undefined : max;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));
console.log(findLargestElement([15, 27, 8, 12]));
console.log(findLargestElement([-5, -10, -2, -8]));
console.log(findLargestElement([0, 0, 0, 0]));
console.log(findLargestElement([-3, -7, -2, -9, -1]));
console.log(findLargestElement([-15, -27, -8, -12]));
console.log(findLargestElement([3.5, 7.2, 2.1, 9.8, 1.9]));
console.log(findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9]));
console.log(findLargestElement([]));