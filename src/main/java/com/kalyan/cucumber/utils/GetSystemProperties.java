package com.kalyan.cucumber.utils;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class GetSystemProperties {

    public static String appUrl = System.getProperty("appUrl","https://google.com/search");
    public static String jiraUrl = System.getProperty("jiraUrl","https://jira.com");
    public static String jiraExecutionId = System.getProperty("jiraTestExecutionId","TEST-123");
    public static String auth = System.getProperty("Authorization","a2FseWFuOmthbHlhbg==");
    public static String featureFileDir = System.getProperty("featureFileImportDir", "src/test/resources/featurefile");
    public static String testResultdir = System.getProperty("cucumberTestResults", "target/cucumber/Destination/cucumber.json");
    public static String downloadFileFormat = System.getProperty("fileFormat", "zip");
}

