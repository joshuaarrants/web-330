/*
============================================
; Title: Exercise 2.2
; Author: Professor Krasso
; Date: 6 August 2018
; Modified By: Joshua Arrants
; Description: This program displays the prototype pattern
;              where a variable uses a funciton to get the age of
;              a perosn. A new object is created and assigned values.
;              Finally, outputs the new objects properties.
*/

var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//output header
console.log(header.display("Joshua", "Arrants", "Exercise 2.2"));
console.log('\n');

//variable that will get the the age of the person
var person = {
    getAge: function() {
        return this.age;
    }
};

//variable that creates a new person object
//age and fullname assigned a value
var josh = Object.create(person, {
    "age":{
        "value": "27"
    },
    "fullname": {
        "value": "Josh Arrants"
    }
});

//outputs the new objects fullname and age using the getAge function
console.log("The person's full name is",josh.fullname + ".");
console.log("The person's age is",josh.getAge() + ".");

// end program