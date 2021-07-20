// how we define a object

// const objectName = {
//     member1Name: member1Value,
//     member2Name: member2Value,
//     member3Name: member3Value
//   };


// const person= {};  
                    //[object Object]
                   // Object { }
                   // { }

// now update peson{}
// note - redecleartion is not allow in const

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
      alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
      alert('Hi! I\'m ' + this.name[0] + '.');
    }
  };
  
// let call these function in console
person.name //Array [ "Bob", "Smith" ]
person.name[0] //"Bob"
// person.bio() //Bob Smith is 32 years old. He likes music and skiing. 
// person.greeting() //Hi! I'm Bob.

// We can also use

person['age'] // in place of  person.age.


// setting object members

person['eyes'] = 'hazel';
person.farewell = function() { alert("Bye everybody!"); }

//now test out your new members:
person['eyes']  // hazel
// person.farewell() // bye everybody



// what is This
//it always ensures that the correct values are used when a member's context changes (for example, two different person object instances may have different names, but we want to use their own name when saying their greeting).

const person1 = {
  name: 'Chris',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

const person2 = {
  name: 'Deepti',
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
}

// person1.greeting() //Hi! I'm Chris.
// person1.greeting() //Hi! I'm Deepti.