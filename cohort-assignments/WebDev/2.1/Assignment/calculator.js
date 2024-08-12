/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    #result;
    constructor() {
        this.#result = 0;
    }

    add(number) {
        this.#result = this.#result + number;
    }

    subtract(number) {
        this.#result = this.#result - number;
    }

    multiply(number) {
        this.#result = this.#result * number;
    }

    divide(number) {
        if (number === 0) {
            throw new Error("Cannot divide by zero");
        }
        this.#result = this.#result / number;
    }

    clear() {
        this.#result = 0;
    }

    getResult() {
        return this.#result;
    }

    calculate(str) {
        const sanitizedStr = str.replace(/\s+/g, '');
        if (/[^0-9+\-*/().]/.test(sanitizedStr)) {
            throw new Error(`Invalid characters in expression ${str}`);
        }
        try {
            this.#result = eval(sanitizedStr);
        } catch (error) {
            throw new Error(`Error evaluating expression ${str}`);
        }
        return this.#result;
    }
}

const calc = new Calculator();
calc.add(8)
calc.subtract(4)
calc.multiply(2)
calc.divide(2)
console.log(calc.getResult());
calc.clear();
console.log(calc.getResult());
calc.calculate('2 + 3 * 4');
console.log(calc.getResult());
calc.calculate('(   15 + 3) /   6   ');
console.log(calc.getResult());
calc.calculate('10 - (4 + 2)');
console.log(calc.getResult());
calc.calculate('(2 + 3) * (6 - (4 + 1) / 2) + 7');
console.log(calc.getResult());
calc.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7');
console.log(calc.getResult());
calc.calculate('(2.5 + 1.5) * 3');
console.log(calc.getResult());
calc.calculate('5 + abc');
console.log(calc.getResult());
calc.calculate('10 * (2 + 3) + xyz');
console.log(calc.getResult());
calc.calculate('10 / 0');
console.log(calc.getResult());
calc.calculate('10 + (2 + 3');
console.log(calc.getResult());
calc.calculate('10 + 2) + 3');
console.log(calc.getResult());
calc.calculate(')10 + 2(');
console.log(calc.getResult());

const data = fetch('')