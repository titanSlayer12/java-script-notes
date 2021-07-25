

//...........................Strings...................................

//string
var job = 'web developer';
var town = "London";
console.log(job+ ", " +town);

//escape the normal process and treat quotation marks as punctuation marks.
var greeting = 'Hello, I\'m glad to see you';  
console.log(greeting); // Hello, I'm glad to see you
//........................................................................
//special characters
//new line
var quote = "This is \n a new line";
console.log(quote);   // This is 
                      // a new line
//........................................................................
//tab
quote = "Here is \t a tab";
console.log(quote);  //Here is 	 a tab
//........................................................................
//Concatenation
var firstname = 'Bill';
var lastname = 'Gates';
var fullname = firstname + " "  + lastname + ".";
console.log(fullname);  // Bill Gates.

//........................................................................
var s = 'apple';
//methods work with the primitive type and object type. Will be covered in detail later
console.log(s.length);  // 5
console.log(s.charAt(2)); // p
console.log(s.indexOf('l')); // 3
console.log(s.lastIndexOf('p')); // 2

//........................................................................
