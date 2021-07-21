/*
    A callback
        : Is a function
            that is passed to a second function
*/
function logMessage() {
  console.log("greetings");
}

//var callback = logMessage;
function printMessages(callback) {
  callback();
  console.log("greeting2");
}
printMessages(logMessage);  // greetings  greetings2
//------------------------------------------------
var numbers = [1, 3, 5, 7, 9];

function logNumber(number) {
  console.log("number", number);
}
numbers.forEach(logNumber); //output : 1 3 5 7 9

// //-----------------------------------------------------------------
function forEach02(array, callback) {
  for (var index = 0; index < array.length; index++) {
    var item = array[index];
    callback(item);
  }
}

forEach02(numbers, logNumber); //output : 1 3 5 7 9

// //forEach02(numbers, () => {});
console.log("greetings");
forEach02(numbers, number => console.log("number", number)); //output : 1 3 5 7 9
