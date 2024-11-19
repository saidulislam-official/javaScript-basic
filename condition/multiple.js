const salary =  66655;
const isBCS = true;
const height = 5.5;
/** 
if (salary > 60000 &&  height > 6){
    console.log('I will buy a car');
}
else{
    console.log('I will buy a bike');
}
*/

/**
if(salary > 60000 || height > 6){
    console.log('I will buy a car');
}
else{
    console.log('I will buy a bike');
}
*/

// complex condition
if((salary > 60000 || height > 6) && isBCS == true){
    console.log('I will buy a car');
}
else{
    console.log('I will buy a bike');
}   