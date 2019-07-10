Feature: Search Engine
Scenario Outline: TestMeApp SearchEngine

Given url for TestMeApp "http://10.232.237.143:443/TestMeApp/login.htm"
When  user enters username field "<username>" 
And user enters password  field "<passWord>" 
And user clicks login button
And user clicks search button and types"<data>"
And user clicks find details
Then TestMeApp doesn't display the cart icon

Examples:
|username  |passWord |data|
|lalitha   |password123|HeadPhone|