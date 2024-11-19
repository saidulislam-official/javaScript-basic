/**
 * Ternary --> Three parts
 * 
 *     ?    :
 * 
 *    condition ? true : false 
 * 
 */

const age = 6;
// normal if else condition
// if(age >= 18){
//     console.log('You are an adult');
// }
// else{
//     console.log('You are not an adult');
// }


/** simple ternary  */
// age >= 18 ? console.log('adult') : console.log('not an adult');


let price = 600;
const isLeader = false;
/**

if(isLeader === true){
    price = 0;
}
else{
    price += 100;
} 

console.log('Price: ', price);

*/  



// price = isLeader === true ? 0 : price + 100;
// console.log('Price: ', price);


/** semi advanced ternary */

// if(isLeader === true){
//     if(price > 1000){
//         price = price / 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price += 1000;
// }

// price > 1000 ? price = price / 2 : price = 0;
price = isLeader === true ? price > 1000 ? price = price / 2 : price = 0 : price + 1000;

console.log('Price: ', price);


