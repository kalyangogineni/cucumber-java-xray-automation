# cucumber-java-xray-automation
Download test cases from jira xray and execute all tests and upload test results back to jira Xray. Once you have your test cases in JIRA you can map them to stories and have your test requirement coverage defined.


Steps:
1) Clone or download the project
2) run
 cd cucumber-java-xray-automation
 
3) Either you can update the config.properites file for all the properites or pass it -D paramenter as given in below example
 Execute below command
 - mvn clean verify -DjiraUrl=https://jira.com -DjiraTestExecutionId=TEST-1


You can disable downloading and uploading files to / from jira with a flag now. With flag as true it will download feature files from jira and upload results back. But passing it as false it will neither download files from jira nor upload results to jira and it will just run what ever featur files are in the featurefile directory.

mvn clean verify -DjiraInteraction=false
