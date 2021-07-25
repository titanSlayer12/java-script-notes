



var z = "1" + 5;
console.log(z); // 15
console.log(typeof z); // string

z = "1" - 5;
console.log(z);  // -4
console.log(typeof z);  // number

z = "one" * 2; 
console.log(z);  // NaN
console.log(typeof z); // number

z = 2 * null;
console.log(z); // 0
console.log(typeof z); // number

console.log(0 == false);  // true
console.log("" == false); // true
console.log(null == false); // false
console.log(undefined == false);  // false

//undefined == null
console.log(undefined == null);  // true
console.log(undefined == undefined);  // true
console.log(null == null); // true

//NaN == NaN
console.log(NaN == NaN);  // false
