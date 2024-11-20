/*
    Checking if it's an Array
    Instructions:

    Create different variables, each containing either an array or a non-array value.

    Now use isArray to check if each variable is an array.

    Print a message to the console indicating whether each variable is an array or not.

*/
const friends = ['bill', 'mark', 'elon', 'jeff', 'warren', 'steve', 'elision', 'lary', 'sergey'];

const nums = [];
const food = 'pi zz a';

console.log(Array.isArray(friends));
console.log(Array.isArray(nums));
console.log(Array.isArray(food));