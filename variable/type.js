var firstName = 'Bill';
var lastName = 'Gates';

var country = "USA";
var city = "Seattle";
var age = 65;
var isMarried = true;
var isPoor = false;

var fullName = firstName + ' ' + lastName;
console.log(fullName); // Bill Gates

console.log('His age is ' + age + ' and he lives in ' + country); // His age is 65 and he lives in USA
console.log('is he married? ' + isMarried); // He is married? true
console.log('is he poor? ' + isPoor); // He is poor? false


console.log("Test the type of the variables");
console.log(typeof firstName); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean