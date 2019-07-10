Feature: Register feature for test me app
Scenario: Register scenario
Given url of testmeapp "http://10.232.237.143:443/TestMeApp/RegisterUser.htm"
When  user enters "Granger" as username
And user enters "vini" as firstname
And user enters "reddy" as lastname
And user enters "potter123" as password
And user enters "potter123" as confirmpassword
And user clicks on "Female" as gender
And user enters "granger@email.com" as email
And user enters "8765364234" as mobilenumber
And user enters "2/12/1998"as DOB
And user enters "fhdrykm.rfrtuertqaerhnhgm" as address
And user selects "what is your Birth place?" security question
And user enters "pulivendula" as answer
Then user clicks on REGISTER