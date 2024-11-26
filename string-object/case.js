const school = 'Ak HiGH School and College';
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'chemistry';
const book = 'Chemistry';

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("i am reading book");
}
else{
    console.log("i am not reading a book");
}


const drink = "water";
const liquid = ' water ';

if(drink.trim() === liquid.trim()){
    console.log("i will drink water");
}
else{
    console.log("i am not ");
}