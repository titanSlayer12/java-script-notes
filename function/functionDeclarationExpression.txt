/*
    Different ways to declare a function
        1. Function declaration.
        2. Function Expression.
        3. Anonymous Function.


*/

//---------------------------------------------------------------
// function declaration
function calculateTip(price, percentage) {
    //side effect
    console.log('calcualting tip');

    return ((percentage / 100) * price);
}

console.log(calculateTip(50, 18)); // 9

//---------------------------------------------------------------
// function expression
// It allows a function to be a nameless.
var calculateTip02 = function (price, percentage) {
    //side effect
    console.log('calcualting tip');

    return ((percentage / 100) * price);
}

console.log(calculateTip02);
console.log(calculateTip02(100,20)); //20
//--------------------------------------------------------------------

var divideByN = function (number, n) {
    return number / n;
}

console.log(divideByN);
console.log(divideByN(18, 3)); // output: 6


//---------------------------------------------------------------
// anonymous function
var calculateTip03 = (function (price, percentage) {
    //side effect
    console.log('calcualting tip');
    return ((percentage / 100) * price);

})(50, 18);
console.log(calculateTip03);


//.......................................................
var abc = (function (number, n) {
    console.log('I am an expression');
    return (number / n);
})(18, 3);

console.log(abc);   // 6
console.log("hey Sarthak"); 

