INSERT INTO [dbo].[PERSON]  
    ( [PersonFname], [PersonLname], [PersonDOB], [PersonEmail] )
VALUES  
    ( @firstname, @lastname, @dateofbirth, @email );

SELECT  Id as id 
        , PersonFname as firstname
        , PersonLname as lastname
        , PersonDOB as dateofbirth
        , Email as email
FROM     [dbo].[PERSON]  
WHERE     Id = SCOPE_IDENTITY()