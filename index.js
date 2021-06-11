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

var age = 9;

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

let cmnt = "now you became a web developer you";
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

// Dom Manipulation

// let elementid = document.getElementById('click');
// console.log(elementid);

// let elementclass = document.getElementsByClassName('container');
// console.log(elementclass);
// elementclass[0].classList.add("bg-primary") //add class throug a css which is not define in a HTML.
// elementclass[0].classList.add("text")

// console.log(elementclass[0].innerHTML); // for inner HTML 
// console.log(elementclass[0].innerText);  // for inner text in HTML

//tag 
//  tn = document.getElementsByTagName('div');
//  console.log(tn);


//  CreatedElement = document.createElement('p'); // for create a new element
//  CreatedElement.innerText = "I am Monkey D luffy"
//  tn[0].appendChild(CreatedElement);
//  CreatedElement2 = document.createElement('p');
//  CreatedElement2.innerText = "I am  luffy"
//  tn[0].replaceChild(CreatedElement2, CreatedElement);

//document

 //document.links
 //document.images
//  document.domain
// document.scripts
// document.textContent
//and soo on


// Selecting using query 
// sel = document.querySelector('.container')   //first element
// console.log(sel)

// sel = document.querySelectorAll('.container')   //all element
// console.log(sel)

// Events in JavaScript

// function clicked()
// {  //from html define in button 
//   console.log("button was clicked")
// }

// function mouse()
// {  //from html define in button 
//   //alert("hello")
//   console.log("hello")
// }

// function Focusevent()
// {  
//   //from html define in input for change in color in input 
//   document.getElementById("input1").style.background="red";
// }


// function keydown()
// {  
//   //from html define in input for change in color in input 
//   document.getElementById("input2")
//   alert("pressed a key")
// }


// window.onload =function(){ // from html
//   console.log('the document was loaded'
//   )
// }


// function click()
// {  //from html define in button
//   document.innerHTML 
//   console.log("button was clicked")
// }






// firstContainer.addEventListner('click',function(){
//   document.querySelectorAll('.container')[1].innerHTML
//   console.log("clicked on Container")
// })