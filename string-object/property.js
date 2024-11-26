const person = {
    name : 'Bill Gates',
    age : 58,
    profession : 'Engineer and founder',
    salary : 66564646,
    married : true,
    'fav places' : ['Silicon Valley', 'New york'],
};

// console.log(person);

//dot notation
// console.log(person.name);
const income = person.salary;
// console.log(income);

// bracket notation
// console.log(person['age']);
const monthlyIncome = person['salary'];
console.log(monthlyIncome);