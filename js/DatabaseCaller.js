var sql = require("seriate");

var person = require('../js/person');

var schema = require('../js/schema');
// Change the config settings to match your 
// SQL Server and database
var config = {  
    "server": "IS-HAY04.ischool.uw.edu",
    "user": "INFO445",
    "password": "GoHuskies!",
    "database": "MLS"
};

sql.setDefaultConfig( config );

sql.execute( {  
        query: "SELECT * FROM TEAM"
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );

// adds a person - David Neal, DOB is 1989-12-03
person.insertPerson( "David", "Neal", "1989-12-03" )  
    .then( function( person ) {
        console.log( "person:", person );
    }, function( err ) {
            console.log( "err:", err );
        } );

// // will return all tables in the db
// schema.getAllTables()  
//     .then( function( results ) {
//         console.log( results );
//     }, function( err ) {
//             console.log( "Something bad happened:", err );
//         } );

// // will return the tableName
// var tableName = "OWNER";
// schema.getTable( tableName )  
//     .then( function( results ) {
//         console.log( results );
//     }, function( err ) {
//             console.log( "Something bad happened:", err );
//         } );

// // will return the columns of the tableName
// schema.getColumns( tableName )  
//     .then( function( results ) {
//         console.log( results );
//     }, function( err ) {
//             console.log( "Something bad happened:", err );
//         } );

// // returns a query of all the teams
// sql.execute( {  
//         query: "SELECT * FROM TEAM"
//     } ).then( function( results ) {
//         console.log( results );
//     }, function( err ) {
//         console.log( "Something bad happened:", err );
//     } );