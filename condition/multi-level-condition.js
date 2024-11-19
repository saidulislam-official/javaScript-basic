/**
 * Multi Level condition
 * 
 */

const price = 3000; 

if(price >= 5000){
    //10% discount
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log('You will get 10% discount');
    console.log('After discount you have to pay: ', payAmount);
}
else if(price >= 2600){
    //5% discount
    const discount = price * 5/100;
    const payAmount = price - discount;
    console.log('You will get 5% discount');
    console.log('After discount you have to pay: ', payAmount);
}
else{
    console.log('No discount');
    console.log('You have to pay: ', price);
}
