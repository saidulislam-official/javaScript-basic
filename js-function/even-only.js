/**
 * create function that will return only the even numbers 
 * return the sum of even numbers
 */

function evenNumbersOnly(numbers){
    // console.log(numbers);
    const evens = []
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            // console.log(number);
            evens.push(number)
            // return evens;
        }
        // return evens;
    }
    return evens;
}
const numbers = [5,6,7,16,17,18];

// const evens = evenNumbersOnly(numbers)

// console.log("even number are ", evens)


function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
            // return sum;
        }
        // return sum;
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log("sum of the even numbers is ", sum);