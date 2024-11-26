const college = {
    name :'DMRC',
    class : ['11','12'],
    events : ['science fair', 'job fair', 'research fair'],
    unique : {
        color : 'blue',
        results:{
            gpa : 5,
            merit : 'top',
        },
    },
};

// console.log(college.unique.color);
college.unique.results.merit = 'top most';
console.log(college.unique.results.merit);
console.log(college.events[2]);
delete college.class;
console.log(college);