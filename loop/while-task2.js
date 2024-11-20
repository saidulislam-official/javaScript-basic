/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

console.log("odd numbers are")
let oddNumber = 61;
while(oddNumber <= 100){
    if(oddNumber % 2 !== 0){
        console.log(oddNumber);
    }
    oddNumber++;
}

console.log("******------------------******");
console.log("even numbers are")
let evenNumber = 78;
while(evenNumber <= 98){
    if(evenNumber % 2 === 0){
        console.log(evenNumber);
    }
    evenNumber++;
}
