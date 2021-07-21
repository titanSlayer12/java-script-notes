// 1. ways to print in js
// console.log("hello world");
// alert("me"); 
// document.write("this is document write")

// 2. js console API
// console.log("hello world", 4 + 4, "another log");
// console.warn("this is warning")
// console.error("this is error")

/*
multi
Line
comment
*/

//inner html

// document.getElementById("click").innerHTML = "hello";


// 3. js variables
//what are varaibles?????? = container to store  data values
// var number1 = 34;
// var number2 = 56; 
// console.log(number1 + number2);

// 4. data type in js

// string
// var str1 = "thiis is string";
// var str2 = "thiis is string";

//number
// var number1 = 55;
// var number2 = 4.5;

//objects
// var marks = {
//     ravi:55,
//     sudhir:44,
//     aman:66,   
// }
// console.log(marks);

// booleans
// var a = true;
// var b = false;
// console.log(a, b);

// var und = undefined;
// console.log(undefined);
// or
// var und
// console.log(und);

// //null
// var n= null;
// console.log(n);

/*
5. at a very high level, there are 2 types of data types in javascript
  1. primitive data types : undefine, null, number, string, symbol, boolean
   2. reference data type : Arrays and object

*/

//6. array

//  var arr =[5,4,2,6,3]
//  console.log(arr);
//  console.log(arr[3]);
//  console.log(arr[0]);

//  var arr =[5,4,'bablu',6,3]
//  console.log(arr);

// 7. operators in js

// arthmatic operartors
// var a = 4;
// var b = 2;
// console.log("the value of a + b is", a+b);
// console.log("the value of a - b is", a-b);
// console.log("the value of a / b is", a/b);
// console.log("the value of a * b is", a*b);


// // Assignment operators

// var c= b;
// //console.log(c)
//c += 5; //c=c+5
// console.log(c);

//comparison operators
// var x = 4;
// var y =5;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// logical operators

// logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// logical not
// console.log(!false);
// console.log(!true);


//functon in js 
//DRY = Do Not Repeat yourself

// function avg(a,b){
//      //return(a+b)/2;
//      //or
//      c=(a+b)/2;

//   return c;
// }
// c1= avg(4,6);
// c2= avg(14,16);
// console.log(c1,c2);


// blue color number in console is number and a red color number in console is string
// var a= 5;
// var b= "5"
// console.log(a,b)

//conditional in js

// var age = 9;

// if Statment
// if (age > 18){
//   console.log("you are not a child");
// }

// if else statement

// if (age > 18){
//   console.log("you are not a child");
// }
// else{
//   console.log("you are a child");
// }

/* if else lader

if (age > 38){
  console.log("you are not a child");
}

else if (age > 29){
  console.log("you are boy");
}
else if (age > 18){
  console.log("you are a mature");
}
else if (age > 8){
  console.log("you are adult");
}

else{
  console.log("you are a child");
}
*/

// for loop
// var arr = [1,2,3,4,5,6,7];
// for(var i=1;i<arr.length;i++){
//   console.log(arr[i])
// }

// var sum =0;
// const n=100{
// // for(var i=1;i <= n;i++)
// for(var i = n; i >= 1; i-- ) 
// sum+=i;
// }
// console.log("sum: ",sum)


/*Element in js
arr.forEach(function(element){
  console.log(element);
})
*/


//const= constant
// // const a = 0;    
// // a++;

//while loop
// var arr = [1,2,3,4,5,6,7];
// let j=0;
// while(j<arr.length){
//   console.log(arr[j]);
//   j++
// }

/*do while
var arr = [1,2,3,4,5,6,7]; 
let j=0;
do{
  console.log(arr[j]);
  j++
}
while(j<arr.length);
*/

// odd even program

// const n =prompt("enter a number")
// if(n%2==0){
// console.log("the number is even")
// }


/* continue
var arr = [1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++){
  if(i==2){
  continue;
  }
  console.log(arr[i])
}
*/


/*
    Break

var arr = [1,2,3,4,5,6,7];
for(var i=0;i<arr.length;i++){
  if(i==2){
  break;
  }
  console.log(arr[i])
}
*/

//array method
// let myarr = ["fan","camera",34,null,true];
// myarr.pop()  //remove last elemenet
// myarr.push("tony") //add new element at last
// //myarr.shift()  //shift first element as a new array
// myarr.unshift("kk") //add new element at start
// console.log(myarr);
// console.log(myarr.length);


//string method in js

// let cmnt = "now you became a web developer you";
// console.log(cmnt.length)
// console.log(cmnt.indexOf("you"))
// console.log(cmnt.lastIndexOf('you'))
//console.log(cmnt.slice(1,3)) 
// d=cmnt.replace("now","then"); // always replce first occurence
// console.log(d)

//for date and time


/* 
let mydate = new Date();
//console.log(mydate);       //for cureent time
console.log(mydate.getTime());     // for time in secound
console.log(mydate.getDate());
console.log(mydate.getDay());
console.log(mydate.getFullYear());
console.log(mydate.getMinutes());
*/

//  DOM manipulation

// by id

let elem = document.getElementById('click')
// console.log(elem)

//  let button = document.getElementById('click')
// console.log(button)
// button.style.background = "red"


//by class

let ele = document.getElementsByClassName("container")
// console.log(ele);
// ele[0].style.background = 'yellow'
// ele[0].classList.add("bg-primary")
// ele[0].classList.add("text")
// console.log(ele[0].innerText)//for inner text
// console.log(ele[0].innerHTML) // for inner html

// remove  from element
// let button = document.getElementsByClassName("b2")
// console.log(button)
// button[0].classList.remove('b2')


// tag name

tg = document.getElementsByTagName('p')
// console.log(tg)

// createdElement = document.createElement('p')
// createdElement.innerText = " th1 is is new para"
// tg[0].appendChild(createdElement);

// replace a tag
// createdElement2 = document.createElement('em')
// createdElement2.innerText = " this is new para"
// tg[0].replaceChild(createdElement2, createdElement);

 

// console.log(document.title)
// console.log(document.location)
// console.log(document.URL)
// console.log(document.links)
// console.log(document.scripts)
// console.log(document.images )
// console.log(document.domain)

// query selector

query = document.querySelector('.container')
// console.log(query)
//return only one element

query = document.querySelector('.container')
// console.log(query)
//return all element


// EVENTS IN JAVASCRIPT

// function clicked(){
//   console.log("the button clicked......")
// }

// firstcontainer.addEventListener('click', function(){
//   console.log("click hua")
// })

// firstcontainer.addEventListener('mauseover', function(){
//   console.log("mouseover work")
// })
// firstcontainer.addEventListener('mouseout', function(){
//   console.log("mauseout work")
// })

// firstcontainer.addEventListener('mouseup', function(){
//   console.log("mause up")
// })

// firstcontainer.addEventListener('mousedown', function(){
//   console.log("mause down")
// })
 
 // change a text by event

//  firstcontainer.addEventListener('click', function(){
//    document.querySelectorAll('.container')[1].innerHTML = "<b> paragraph change </b>"
//   console.log("click on container")
// })

// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//   document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//   console.log("mause up")
// })

// firstcontainer.addEventListener('mousedown', function(){
//    document.querySelectorAll('.container')[1].innerHTML = "<b> paragraph change </b>"
//   console.log("mause down")
// })



// set time out and setInterval

// Arrow fuction

//normal function
// function sum(a,b){
//   return a+b;
// }

sum = (a,b)=>{  //arrow fucton
  return a+b;
}

// set timeout

logKaro = ()=>{
  //  document.querySelectorAll('.container')[1].innerHTML = "<b> set interval fire </b>"
  // console.log(" am your log")
}

// setTimeout(logKaro,5000);
// use clearTime() to set time out

// setInterval

// setInterval(logKaro,2000);
// clr = setInterval(logKaro,2000); //here the clr used for stop setInterval in clearInterval
//  clearInterval() is used to stop setInerval


// JAVASCRIPT LOCAL Storage


//  json

// obj = {name:"sudhir",length: 1, a:{this:"that"}}
// obj = {name:"sudhir",length: 1, a:{this:'th"at'}}
// json did not accept double quote
// jso = JSON.stringify(obj);
// console.log(jso)
// console.log(typeof jso)
// console.log(typeof obj)

// parsed = JSON.parse('{"name":"sudhir","length": 1, "a":{"this":"that"}}')
// console.log(parsed);

// Template literals or backtrcks

// a = 34;
// console.log('this is my ${a}')
