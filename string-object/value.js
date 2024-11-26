const person = {
    name : 'Bill Gates',
    age : 58,
    profession : 'Engineer and founder',
    salary : 66564646,
    married : true,
    'fav places' : ['Silicon Valley', 'New york'],
};
console.log(person);
person['fav places'] = ['Sweden', 'Denmark'];
console.log(person['fav places']);
console.log(person);