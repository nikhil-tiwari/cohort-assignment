/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    str = str.toLowerCase();
    let right = 0, left = str.length-1;
    while(right <= left) {
        if(str[right] === ' ' || str[right] === ',' || str[right] === '.' || str[right] === '!' || str[right] === '?') {
            right = right + 1;
        } else if(str[left] === ' ' || str[left] === ',' || str[left] === '.' || str[left] === '!' || str[left] === '?') {
            left = left - 1;
        } else if(str[right] === str[left]) {
            right = right + 1;
            left = left - 1;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('level'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));
console.log(isPalindrome('openai'));
console.log(isPalindrome('abcde'));
console.log(isPalindrome(''));
console.log(isPalindrome('Anna'));
console.log(isPalindrome('aNnA'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome('MaDaM'));
console.log(isPalindrome('RaCeCaR'));
console.log(isPalindrome('rAcEcAr'));
console.log(isPalindrome('a'));
console.log(isPalindrome('z'));
console.log(isPalindrome('5'));
console.log(isPalindrome('@'));
console.log(isPalindrome('race car'));
console.log(isPalindrome('A man a plan a canal Panama'));
console.log(isPalindrome('Was it a car or a cat I saw'));
console.log(isPalindrome('Able, was I ere I saw Elba!'));
console.log(isPalindrome('Eva, can I see bees in a cave?'));
console.log(isPalindrome('Mr. Owl ate my metal worm.'));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
  