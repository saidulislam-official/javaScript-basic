/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */
console.log('Display sum of all the odd numbers from 91 to 129');
let sum1 = 0;
for (let i = 91; i <= 129; i++){
    if(i % 2 !== 0){
        // console.log(i);
        sum1 = sum1 + i;
        // console.log(sum1);
    }
    
}
console.log(sum1);

console.log('=====================');
let sum2 = 0;
console.log('Display sum of all the even numbers from 51 to 85');
for(let i = 51; i <= 85; i++){
    if(i % 2 === 0){
        // console.log(i);
        sum2 = sum2 + i;
        // console.log(sum2);
    }
}
console.log(sum2);