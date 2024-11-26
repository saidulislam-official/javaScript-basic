const number = [1,2,3,4,5,6,7,8,9];
// console.log(number);

// number.reverse();

// const reversed = number.reverse();

// console.log(reversed);


const rev_numbers = [];
for(const num of number){
    // console.log(num);
    rev_numbers.unshift(num);
}
// console.log(rev_numbers);

const reversed_numbers = [];
for(let i = 0; i < number.length; i++){
    const num = number[i];
    reversed_numbers.unshift(num);
}
console.log(reversed_numbers);