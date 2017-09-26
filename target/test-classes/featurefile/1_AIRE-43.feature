@AIRE-148
@AIRE-43
Feature: Data Collector for "On Hand" data attribute

	#UPC "3400056" under a store 100 does not exist.
	@AIRE-91 @AIRE-87
	Scenario: To retrieve on Hands Quanity for a store in which request UPC which does not exist
		
		Given "On Hand System" is  up and running
		When User retrieves data from "upc" with
			|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
			|onHands              |404     |USD         |3400056                |
		
		Then Application should respond with reason code "502"
		
			

	#for Store 500, on hand system responds with 500 Error
	@AIRE-92 @AIRE-87
	Scenario: To retrieve On Hand Quantity for a Store for which on hand system gives 500 Error response  
		
		Given "On Hand System" is  up and running
		When User retrieves data from "upc" with
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |500     |USD         |3400056002000          |
		
		Then Application should respond with reason code "502"
			

	
	@AIRE-101 @AIRE-87
	Scenario: To retrieve onHands Quanity for a UPC when the Quantity of a UPC is in negative 
		## OnHand Quantity is set to -1 in mock
		Given "OnHands Inventory" is  up and running
		When User retrieves data from "upc" with
		
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |109     |US         |340005600          |
		
		Then Application should respond with reason code "200"
		And Response should contain
		
		|value                |[{"quantity":"-1","location":"SALESFLOOR", "inventoryState":"AVAILABLE"}]  |
		
		And Application should respond back with valid "MediaType"	

	#for Store 108, downstream system delays the response for 6 sec which causes data service to cause timeout. 
	@AIRE-95 @AIRE-87
	Scenario: To retrieve On Hand quantity for a store and down stream system timesout.
		
		Given "On Hand System" is  up and running
		When User retrieves data from "upc" with
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |108     |USD         |3400056002000          |
		
		Then Application should respond with reason code "502"
		
			

	
	@AIRE-118 @AIRE-87
	Scenario: To retrieve a invalid attribute from a store which is not defined
		Given "Store" is  up and running
		When User retrieves data from "upc" with
			|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
			|test                 |900     |US         |3400056002000          |
			
		Then Application should respond with reason code "400"	

	#On Hand Inventory System only responds back with Claim status for a UPC "340005600" under a store 101
	@AIRE-96 @AIRE-87
	Scenario: To retrieve On Hand Order quantity for a store and UPC for which downstream only responds back with only claim status.
		Given "OnHands Inventory" is  up and running
		When User retrieves data from "upc" with
		
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |101     |USD         |340005600          |
		
		Then Application should respond with reason code "200"
		And Application should respond back with valid "MediaType"	

	#retrieving onhands from Store 404 , on hand system gives 404 response 
	@AIRE-93 @AIRE-87
	Scenario: To retrieve OnHand orders for a store for which on hand system gives 404 in response
		
		Given "On Hand System" is  up and running
		When User retrieves data from "upc" with
			|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
			|onHands              |404     |USD         |3400056002000          |
		
		Then Application should respond with reason code "502"
			

	#For Store 400, Down stream system responds with 400 bad request
	@AIRE-94 @AIRE-87
	Scenario: To retrieve OnHand quantity and down stream system responds with 400 bad request
		
		
		Given "On Hand System" is  up and running
		When User retrieves data from "upc" with
			|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
			|onHands              |400     |USD         |3400056002000          |
		
		Then Application should respond with reason code "502"
			

	#The Quantity of UPC in a store is 0.2
	@AIRE-117 @AIRE-87
	Scenario: To retrieve onHands from a store for a UPC which have a quantity in decimals
		## On hand system return 0.2 as quanity value
		Given "On Hand System" is  up and running
		When User retrieves data from "upc" with
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |110     |US         |3400056002000          |
		
		Then Application should respond with reason code "200"
		And Response should contain
		
		|value              |[{"quantity":"0.2","location":"SALESFLOOR", "inventoryState":"AVAILABLE"}]  |
		
		And Application should respond back with valid "MediaType"	

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

	#For upc "340005600" Store 103 gives Zero on hand quanity
	@AIRE-97 @AIRE-87
	Scenario: To retrieve On Hand quantity from a store for UPC which have 0 available and 0 claim quanitity
		Given "OnHands Inventory" is  up and running
		When User retrieves data from "upc" with
		
		|attribute            |Store_ID|Country_Code|upcNumber_OR_GtinNumber|
		|onHands              |103     |US         |340005600          |
		
		Then Application should respond with reason code "200"
		And Response should contain
		
		|value                |[{"quantity":"0","location":"SALESFLOOR", "inventoryState":"AVAILABLE"}]  |
		
		And Application should respond back with valid "MediaType"