

//.........................Booleans................................

//...........................................................
//Booleans
var x = 3;
var y = 5;
var z = x < y;
console.log(z);  // true
console.log(typeof z);  // boolean
//...........................................................
//Logical Operators
z = (x < y) && (x > 0);
console.log(z);  // true
z = false || true;
console.log(z);  // true
z = !(x < 10);
console.log(z);  // false
//...........................................................
//Operator Precedence
z = false && true || true;//&& stronger
console.log(z); // true
//...........................................................
//Ternary Operator
z = x > 2 ? 'Pass' : 'Fail';
console.log(z); // pass
//...........................................................
//Logical operators with non booleans
console.log('banana' == false); // false

z = 'banana' && 'apple';
console.log(z); // apple


z = 'banana' || 'apple';
console.log(z);  // banana

var fruit;
console.log(fruit); // undefines
console.log(fruit == false);  // false
z = fruit || 'apple';
console.log(z); // apple

console.log('' == false); // true
z = '' || 'apple';
console.log(z); // false

z = '' && false;
console.log(z); // <empty string>

z = 0 && false;
console.log(z); // 0

//...........................................................
