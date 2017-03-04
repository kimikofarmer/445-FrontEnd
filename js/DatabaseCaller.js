var sql = require("seriate");

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