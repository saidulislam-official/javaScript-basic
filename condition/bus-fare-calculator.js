/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 9;
const ticketPrice = 800;

if(age < 10){
    console.log('You are a child');
    console.log('You will get ticket for free');
}
else if(age < 18){
    console.log('You are a student');
    console.log('You will get 50% discount');
    const discount = ticketPrice * 50/100;
    const payAmount = ticketPrice - discount;
    console.log('After 50% discount you have to pay: ', payAmount);
}
else if(age >= 60){
    console.log('You are a senior citizen');
    console.log('You will get 15% discount');
    const discount = ticketPrice * 15/100;
    const payAmount = ticketPrice - discount;
    console.log('After 15% discount you have to pay: ', payAmount);
}
else{
    console.log('You are a regular person');
    console.log('You have to pay: ', ticketPrice);
}