/**
 * objective: write a function to give me the sum of all number is an array
 * step-1: declare a function,
 * step-2: call check whether the function is called properly
 * step-3: set a parameter(s)
 * step-4: pass the parameter(s), check whether parameter is passed in a proper format
 * step-5: do the function tasks(step by step)
 */

function sumOfNumbers(numbers){
    // console.log(numbers)
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [5,6,7,8,11];
const sum = sumOfNumbers(nums);
console.log('Sum of number is ', sum);