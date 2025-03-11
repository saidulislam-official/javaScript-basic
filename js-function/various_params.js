/*
    for a given string tell me weather it has even number of characters or not
*/

function  evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log("even");
    }
    else{
        console.log("odd");
    }

}
// evenSizedString("Dhaka");
// evenSizedString("Sylhet");
// evenSizedString("Khulna");
// evenSizedString("Rangpur");
// evenSizedString("Cumilla");

function doubleOrTriple(number, doDouble ) {
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(3, true))
// console.log(doubleOrTriple(3, false))

function numberOfElements(numbers){
    console.log(numbers);
    const len = numbers.length;
    return len;
}

const numberLengthCount = numberOfElements([10,2,11,66,77, 3, 6, 5, 7, 10]);
console.log(numberLengthCount);
