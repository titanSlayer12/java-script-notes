



//1. JavaScript Basics 
//2. JavaScript DOM
//3. functional JavaScript
//4. Objectoriented & asyn programming 


//.......................Create a variable......................

"use strict"


//declare a variable
var score;
console.log(score); //undefined

var abc = 10;
var abc ;
console.log(abc); // undefined

//declare a variable and initialize
var livesLeft = 3;
console.log(livesLeft);

//re-assign a value to our variable livesLeft
livesLeft = 2; 
console.log(livesLeft);  //2

//constants
const firstname = 'John';
console.log(firstname);   // John


//.....................................................
var a = 15;
let b = 5;
const c = 25;
console.log(a);   //15
console.log(b);   // 5
console.log(c);    // 25

function func(){
    console.log(a);   // undefined
    var a = 6;
    let b = 16;
    const c = 26;
    console.log(a);  // 6
    console.log(b);  //16
    console.log(c);  // 26
    {
        var  a = 7;
        let b = 17;
        const c = 27;
        console.log(a);   //7
        console.log(b);   // 17
        console.log(c);   // 27
    };
    {
        console.log(a);   //7
        console.log(b);   // 16
        console.log(c);   // 26
    };
}

func();

{
    var a = 25;
}
console.log(a);       // 25
console.log(b);        // 5
console.log(c);       // 25
