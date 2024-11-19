const age = 6;
const price = 600;

if(age <= 12){
    console.log('You are a child');
    console.log('you will get food for free');
}
else if(age <= 18){
    console.log('You are a teenager');
    console.log('You will get 50% discount');
    const discount = price * 50/100;
    const payAmount = price - discount;
    console.log('After 50% discount you have to pay: ', payAmount);
}
else if(age <= 40){
    console.log('You are a young');
    console.log('You will get 20% discount');
    const discount = price * 20/100;
    const payAmount = price - discount;
    console.log('After 20% discount you have to pay: ', payAmount);
}
else{
    console.log('You are a old');
    console.log('You will get 10% discount');
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log('After 10% discount you have to pay: ', payAmount);
}
