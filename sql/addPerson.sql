INSERT INTO [dbo].[PERSON]  
    ( [PersonFname], [PersonLname], [PersonDOB] )
VALUES  
    ( @Fname, @Lname, @DOB );

SELECT     PersonID AS id  
        , PersonFname AS Fname
        , PersonLname AS Lname
        , PersonDOB AS DOB
FROM     [dbo].[PERSON]  
WHERE     PersonID = SCOPE_IDENTITY();  