/**
 * 
 * Checking Array Membership with ‘includes’
    Instructions:

    Create an array of books containing different book.

    Use the includes method to check if the array contains a javascript book.

    Print a message to the console indicating whether the element is present in the array or not. 
 * 
 */

const books = ['think and grow rich', 'rich dad poor dad', 'javascript for dummies', 'the secret', 'the power of now'];

if(books.includes('javascript for dummies')) {
    console.log('Yes, the book is in the list');
}
else {
    console.log('No, the book is not in the list');
}