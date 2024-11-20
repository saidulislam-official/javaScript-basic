
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let oddNumber = 81;
let oddNumberSum = 0;
while(oddNumber <= 131){
    if(oddNumber % 2 !== 0){
        oddNumberSum = oddNumberSum + oddNumber;
    }
    oddNumber++;
}
console.log(oddNumberSum);


let evenNumber = 206;
let evenNumberSum = 0;
while(evenNumber <= 311){
    if(evenNumber % 2 === 0){
        evenNumberSum = evenNumberSum + evenNumber;
    }
    evenNumber++;
}
console.log(evenNumberSum);