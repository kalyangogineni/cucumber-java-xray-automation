@AIRE-148
@AIRE-99
Feature: Create oneops environments for QA mock services - wiremock
	#Oneops environments for mock services used by QA

	#When we make a call to data service to retrieve on hand order under upc with valid store numbers and valid UPC
	@AIRE-86 @AIRE-87
	Scenario: To retrieve onHands Quanity from UPC with valid data
		Given "OnHands Inventory" is  up and running
		When User retrieves data from "upc" with
		
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |900     |US         |340005600          |
		
		Then Application should respond with reason code "200"
		And Application should respond with valid response message
		And Response should contain
		
		|value              |[{"quantity":"100","location":"SALESFLOOR", "inventoryState":"AVAILABLE"}]|
		
		And Response should contain
		|name               | onHands|
		#{"expiryTime"=342423 , "results":[{"name":"onHands",
		# "value":"[{"quantity":"10","location":"SALESFLOOR"}]", 
		#"ttlInMilliseconds":20000}]}
		
		And Application should respond back with valid "MediaType"