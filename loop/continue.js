// continue -->  skip rest of the code for this iteration


for(let i = 1; i<=30; i++){
    if (i % 2 === 1){
        continue;
    }
    // console.log(i);
}

let n = 0;
while(n<45){
    n++;
    if(n%5 !== 0){
        continue
    }
    console.log(n);
}