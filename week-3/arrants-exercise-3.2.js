/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 14 August 2018
; Modified By: Joshua Arrants
; Description: This program displays the use 
;              of the javascript factory pattern
;============================

*/

//Builds the variable header
var header = require('../header.js');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program

//output header
console.log(header.display("Joshua", "Arrants", "Exercise 3.2"));
console.log('\n');

function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

//creates the Oracle database class
function Oracle(properties) {
    this.username = properties.username || "o-admin";
    this.password = properties.password || "o-s8cret";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || 12.1
}

//creates the Informix database class
function Informix(properties) {
    this.username = properties.username || "i-admin";
    this.password = properties.password || "i-s*cret";
    this.server = properties.server || "localhost:3000"
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 

    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    // added the Oracle database class 
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    }
    // added the Informix database class 
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }



    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

//creates an Oracle factory and database
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "o-admin",
    password: "o-password"
});

//creates an Informix factory and database
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "i-admin",
    password: "i-password"
});

//outputs the oracle and infomix database properties
console.log(oracle);
console.log(informix);

// end program