/*
============================================
; Title: Exercise 3.3
; Author: Professor Krasso
; Date: 14 August 2018
; Modified By: Joshua Arrants
; Description: This program displays the use 
;              of the Singleton Pattern
;============================

*/

//Builds the variable header
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

//output header
console.log(header.display("Joshua", "Arrants", "Exercise 3.3"));
console.log('\n');

// Singleton object
var DatabaseSingleton = (function() {
    // A private variable of instance
    var instance;

    // Function that creates a private instance
    function createInstance() {
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;
    }

    // Return singleton function that creates the instance or returns the existing one.
    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

// Function that tests DatabaseSingleton
function databaseSingletonTest() {
    // This is the variable to create the instance.
    var databaseInstance1 = DatabaseSingleton.getInstance();
    var databaseInstance2 = DatabaseSingleton.getInstance();
    //outputs true or false if databaseInstance1 is equal to databaseInstance2
    console.log("One database instance? " + (databaseInstance1 === databaseInstance2));
}

// output database singleton test function
databaseSingletonTest();

// end program