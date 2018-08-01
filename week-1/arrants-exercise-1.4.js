/*
============================================
; Title: Exercise 1.4
; Author: Professor Krasso
; Date: 31 July 2018
; Modified By: Joshua Arrants
; Description: This program creates functions to 
;              output vehicles that have been added
;              to a racetrack using the duck typing 
;              method. 
*/

//var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

//output header
//console.log(header.display("Joshua", "Arrants", "Exercise 1.4"));
//console.log('\n');

function Car (model) {
    this.model = model;
}

Car.prototype.start = function () {
    console.log("Car added to the racetrack!");
}

function Truck (model,year) {
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function () {
    console.log("Truck added to the racetrack!");
}

function Jeep (model,year,color) {
    this.model = model; 
    this.year = year; 
    this.color = color;
}

Jeep.prototype.start = function () {
    console.log("Jeep added to the racetrack!");
}

var racetrack = [];

function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

var newCar = new Car("General Motors");
var newTruck = new Truck("Sierra","2018");
var newJeep = new Jeep("Wrangler","2018","Black");

driveIt(newCar);
driveIt(newTruck);
driveIt(newJeep);


//display vehicles at the racetrack 
console.log("\n-- The following vehicles have been added to the racetrack --");

for (var x = 0; x < racetrack.length; x++) {
 console.log(racetrack[x].constructor.name + ": " + racetrack[x].model);
}

// end program