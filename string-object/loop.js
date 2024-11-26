const mobile = {
    brand : 't6',
    price : 564,
    color : 'Green',
    camera : '16mp',
    isNew : true
};

for ( const pop in mobile){
    // console.log(pop);
    // console.log(mobile[pop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys){
    console.log(key,':',mobile[key]);
}