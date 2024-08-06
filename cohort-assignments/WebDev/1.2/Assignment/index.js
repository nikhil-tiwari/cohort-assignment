// Basic JS

// assignment 1: 

// Create a variable for each of the following: 
// your favorite color, your height in centimeters, 
// and whether you like pizza. 
// Use appropriate variable declarations (let, const, or var). 
// Try logging it using console.log

var color = "black"; // function scoped variable, can be re-assigned and re-initialized
const pizza = true; // block scoped variable, can neither be re-assigned or re-initialized
let height = 180; // block scoped variable, cannot be re-assigned but can be re-initialized
console.log("Favourite color is ", color);
console.log("Height is ", height);
console.log("Do I like pizza? ", pizza);

// assignment 2:

// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

const sum= (a,b) => {
    console.log("Sum is : ", a+b);
}
sum(23,53); // addition
sum("Nikhil", 10) // concatenation
sum(10, "Nikhil") // concatenation


// assignment 3:

// Write a function called canVote that returns true or false if the age of a user is > 18

const canVote = (age) => {
    return age > 18 ? true : false;
}
console.log("Can you vote child?", canVote(12));

// assignment 4:

// Write an if/else statement that checks if a number is even or odd. 
// If it's even, print "The number is even." Otherwise, print "The number is odd."

const checkNumber = (number) => {
    number % 2 === 0 ? console.log("Number is even") : console.log("Number is odd")
}
checkNumber(7);


// assignment 5:

// Write a function called sum that finds the sum from 1 to a number

const sumTillNumber = (n) => {
    let total = 0;
    for(let i=1;i<=n;i++) {
        total+=i;
    }
    return total;
}
console.log("Sum is ", sumTillNumber(5));


// **********************************Complex Types***************************************

// assignment 1: 

// Write a function that takes a user as an input and greets them with their name and age

const user1 = {
    name: 'Nikhil Tiwari',
    age: 25,
}
const greet1 = (user1) => {
    console.log(`${user1.name}'s age is ${user1.age}`)
}
greet1(user1);

// assignment 2:

// Write a function that takes a new object as input which has 
// name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

const user2 = {
    name: 'Nikhil Tiwari',
    gender: 'Mr.',
    age: 25,
}
const greet2 = (user2) => {
    console.log(`Hi ${user2.gender} ${user2.name}'s, your age is ${user2.age}`)
}
greet2(user2);

// assignment 3:

// Also tell the user if they are legal to vote or not

const user3 = {
    name: 'Nikhil Tiwari',
    gender: 'Mr.',
    age: 25,
    canVote: function(){
        return this.age > 18 ? true : false;
    }
}
const greet3 = (user3) => {
    console.log(`Hi ${user3.gender} ${user3.name}'s, your age is ${user3.age}. Can you vote: ${user3.canVote()}`)
}
greet3(user3);

// assignment 4:

// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

const arr1 = [1,2,3,4,5,6];
const evenArray = arr1.filter((value) => value % 2 === 0)
console.log("Even array: ", evenArray);

// assignment 5:

// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

const arr2 = [
    {
        name: 'Toney',
        gender: 'Mr.',
        age: 29,
    },
    {
        name: 'Kerr',
        gender: 'Mrs.',
        age: 22,
    },
    {
        name: 'XYZ',
        gender: 'Other',
        age: 16,
    },
    {
        name: 'Sarah',
        gender: 'Mrs.',
        age: 14,
    },
];
const validAge = arr2.filter((value) => value.age > 18)
console.log("People who can vote are: ", validAge);

// assignment 6: 

// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male

const arr3 = [
    {
        name: 'Toney',
        gender: 'Mr.',
        age: 29,
    },
    {
        name: 'Kerr',
        gender: 'Mrs.',
        age: 22,
    },
    {
        name: 'XYZ',
        gender: 'Other',
        age: 16,
    },
    {
        name: 'Sarah',
        gender: 'Mrs.',
        age: 14,
    },
];
const validUsers = arr3.filter((value) => value.age > 18 && value.gender === 'Mr.')
console.log("People who can vote are: ", validUsers);