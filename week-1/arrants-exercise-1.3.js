/*
============================================
; Title: Exercise 1.3
; Author: Professor Krasso
; Date: 31 July 2018
; Modified By: Joshua Arrants
; Description: This program creates a cellphone
;              function that will output properties
;              methods assigned to a new cellphone
;              object. 
*/

var header = require('../week-1/header');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

//output header
console.log(header.display("Joshua", "Arrants", "Exercise 1.3"));
console.log('\n');
 
function CellPhone (manufacturer, model, color, price) {

    this.manufacturer = manufacturer;
    
    this.model = model;
    
    this.color = color;

    this.price = price;

    this.getPrice = function() {
        return this.price;
    }

    this.getModel = function () {
        return this.model;
    }
    
    this.getDetails = function() {
    
        return "Manufacturer: " + this.manufacturer + "\nModel: " + this.getModel() + "\nColor: " + this.color + "\nPrice: " + this.getPrice();
    }
    
 }

var iPhone = new CellPhone("Apple","iPhone 8","Black","$699");

console.log("-- DISPLAYING CELL PHONE DETAILS --")
console.log(iPhone.getDetails());
    
// end program