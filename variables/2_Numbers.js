// Primitive vs Non-Primitive data types
// 1. number ---------- Number
// 2. string ---------- String
// 3. boolean ---------- Boolean
// 4. undefined  ...... undefined
// 5. null ............ Object

//.......................... Numbers ...........................

var x = 1;
console.log(typeof x); // "number"

//fractional numbers
var y = 2.4;
console.log(y); // 2.4

//5.3 * 10^8
var z = 5.3e8;
console.log(z); // 5.300000000

//max min in JS
var max = Number.MAX_VALUE;
console.log(max);   // 1.7976931348623157e+308
var min = Number.MIN_VALUE;
console.log(min);  // 5e-324

//arithmetic operation ,+,*,-,/ , +=, -=, *=,
var a = 4 + 9;
console.log(a); //13

a = 3 * 4;
console.log(a); // 12

a = y - x;
console.log(a); // 1.4

console.log(12 / 4);

// Data type precedence
// 1. String
// 2. Number
// 3. Boolean

var cdedf = 10 + "11" + true + "10";
console.log(cdedf);  // 1011true10

var cd_e = 10 + +"11" + false + +"110";
console.log(cd_e);  // 131

//...................................
var b = 3;
//b = b + 2;
b += 2; // b = b + 2;
console.log(b); // 5

//b += 1; // b = b + 1
b++;
var a1 = b++;
console.log(a1); //6
console.log(b); // 7

var a1 = b++;
console.log(a1);  //7
console.log(b);  //8

var a2 = ++b;
console.log(a2); // 9

//b -= 1;
b--;
console.log(b); //8
//.............................................................................
//operator precedence
var c = 4 * (5 + 3);
console.log(c); // 20

var d = ++c;
console.log(c); // 21
console.log(d); // 21

var e = c++;
console.log(c); // 22
console.log(e); // 21
//..................More Operators-Special Numbers..................
//remainder operator
var f = 17 % 3;
console.log(f); //17 is 3 * 5 +2
//.......................................................................

//exponent operator
var g = 3 ** 4; //3^4: returns the base to the exponent power
console.log(g);
//.......................................................................

//Infinity
var h = Infinity;
console.log(h);
console.log(3 / 0);
//.......................................................................

//NaN
var i = 0 / 0; //no meaningful result
console.log(i);
//.......................................................................

//power method
var j = Math.pow(2, 53);
console.log(j);
//.......................................................................

//big number
var k = Math.pow(2, 2000);
console.log(k);
//.......................................................................

//parse a string and return an integer
var number = "3";
console.log(parseInt(number)); // 3
console.log(typeof parseInt(number)); // number
console.log(parseInt("not a number")); // NaN
console.log(typeof parseInt("not a number"));  // undefined
//.......................................................................
