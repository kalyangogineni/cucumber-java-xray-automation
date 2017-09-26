# cucumber-java-xray-automation
Download test cases from jira xray and execute all tests and upload test results back to jira Xray. Once you have your test cases in JIRA you can map them to stories and have your test requirement coverage defined.


Steps:
1) Clone or download the project
2) run
 cd cucumber-java-xray-automation
3) Execute below command
 mvn clean verify -DjiraUrl=https://jira.com -DAuthorization=xyasdasdlwerkjwelkr -DjiraTestExecutionId=TEST-1
