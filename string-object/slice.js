const address = 'NewYork';
const part = address.slice(3,7);
console.log(part);


const sentence = 'The Quick Brown Fox Jumps Over a Lazy Dog.';
console.log(sentence.split());
console.log(sentence.split(''));
console.log(sentence.split(' '));
console.log(sentence.split(','));
console.log(sentence.split('o'));


const realFriend = ['elon', 'steve', 'mark', 'bill', 'larry'];
console.log(realFriend.join(''))
console.log(realFriend.join('-'))
console.log(realFriend.join('|'))