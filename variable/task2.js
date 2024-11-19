var input = "75.25, 65, 80, 35.45, 99.50";
// console.log(input);
var inputArray = input.split(", "); 
// console.log(inputArray);
var mathMarks = parseFloat(inputArray[0]);
var bioMarks = parseFloat(inputArray[1]);
var chemMarks = parseFloat(inputArray[2]);
var phyMarks = parseFloat(inputArray[3]);
var banglaMarks = parseFloat(inputArray[4]);
var totalMarks = mathMarks + bioMarks + chemMarks + phyMarks + banglaMarks;
var averageMarks = totalMarks / 5;
console.log(averageMarks.toFixed(2));


/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04

*/