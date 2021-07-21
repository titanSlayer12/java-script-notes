

/*
    Arrow Functions
        - do not create a 'this' object.

*/



// this = window object
var coder01 = {
    username: 'joe',
    years: 3,
    languages: ['js', 'ruby', 'scala'],
    company: {
        name: 'Coder Inc',
        location: 'San Francisco'
    },
    logStatus: function()  {
        // this = owner object
        console.log('working from office');
    },
    logProfile: function()  {
        console.log('username: ', this.username);
        console.log('years coding: ', this.years);
        console.log('languages:', this.languages.join(', '));
        console.log('company name: ', this.company.name);
        console.log('company location: ',this.company.location);
    }
};

console.log(coder01.username);
coder01.logStatus();
coder01.logProfile();

var coder03 = coder01;

coder03.username = 'maya';
console.log(coder03.username);

coder03['username'] = 'maya01';
console.log(coder03.username);