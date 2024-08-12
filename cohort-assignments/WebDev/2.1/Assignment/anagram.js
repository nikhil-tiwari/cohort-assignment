/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    const anagram = new Map();
    if(str1.length !== str2.length) {
        return false;
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for(let i = 0; i < str1.length; i++) {
        if(!anagram.has(str1[i])) {
            anagram.set(str1[i], 1);
        } else {
            anagram.set(str1[i], anagram.get(str1[i]) + 1);
        }
    }
    for(let i = 0; i < str2.length; i++) {
        if(!anagram.has(str2[i])) {
            return false;
        } else {
            let freq = anagram.get(str2[i]);
            if(freq < 2) {
                anagram.delete(str2[i]);
            } else {
                anagram.set(str2[i], freq - 1);
            }
        }
    }
    return anagram.size === 0;
}

console.log(isAnagram('listen', 'silent'))
console.log(isAnagram('rail safety', 'fairy tales'))
console.log(isAnagram('openai', 'aiopen'))
console.log(isAnagram('', ''))
console.log(isAnagram('hello', 'world'))
console.log(isAnagram('openai', 'open'))
console.log(isAnagram('hello', 'lhel'))
console.log(isAnagram('working', 'non'))
console.log(isAnagram('Debit Card', 'Bad Credit'))
console.log(isAnagram('School MASTER', 'The ClassROOM'))
console.log(isAnagram('abc!', '!bac'))
console.log(isAnagram('hello', 'hello!'))
console.log(isAnagram('openai!', 'open'))
