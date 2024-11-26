const sentence = "The quick brown fox jumps over a lazy dog.";

const result = ".god yzal a revo spmuj xof nworb kciuq eht";

let reverse =   ''
for (const letter of sentence){
    // console.log(letter);
    reverse  = letter + reverse;
}

// console.log(reverse);
let rev = '';
for(let i = 0; i < sentence.length; i++){
    // console.log(i);
    const letter = sentence[i];
    rev = letter + rev;
}
// console.log(rev);


const reversed = sentence.split('').reverse().join('');
console.log(reversed);

