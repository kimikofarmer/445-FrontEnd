var sql = require( "seriate" );  
var when = require( "when" );

var insertPerson = function( firstname, lastname, dateofbirth, email) {  
    return sql.execute( {
        procedure: "uspNewPerson",
        params: {
            PersonFname: {
                type: sql.NVARCHAR,
                val: firstname
            },
            PersonLname: {
                type: sql.NVARCHAR,
                val: lastname
            },
            PersonDOB: {
                type: sql.NVARCHAR,
                val: dateofbirth
            },
            PersonEmail: {
                type: sql.NVARCHAR,
                val: email
            }
        }
    } );
};

module.exports = {  
    insertPerson: insertPerson
};