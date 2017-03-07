/* This is all wrong lol */
INSERT INTO [dbo].[PLAYER]  
    ( [PlayerNickname], [PlayerTypeID], [PersonID] )
VALUES  
    ( @nick-name, @, @emailAddress );

SELECT     Id AS id  
        , FirstName AS firstName
        , LastName AS lastName
        , EmailAddress AS emailAddress
FROM     [dbo].[Member]  
WHERE     Id = SCOPE_IDENTITY();  