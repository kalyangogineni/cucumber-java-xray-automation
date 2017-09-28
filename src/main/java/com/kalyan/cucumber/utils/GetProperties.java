package com.kalyan.cucumber.utils;

import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URI;
import java.util.Properties;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class GetProperties {
    public static String appUrl = System.getProperty("appUrl",propLoad("appUrl"));
    public static String jiraUrl = System.getProperty("jiraUrl",propLoad("jiraUrl"));
    public static String jiraExecutionId = System.getProperty("jiraTestExecutionId",propLoad("jiraExecutionId"));
    public static String auth = System.getProperty("Authorization",propLoad("authorization"));
    public static String featureFileDir = System.getProperty("featureFileImportDir", propLoad("featureFileDir"));
    public static String testResultdir = System.getProperty("cucumberTestResults", propLoad("testResultdir"));
    public static String downloadFileFormat = System.getProperty("fileFormat", propLoad("downloadFileFormat"));
    public static String jiraInteraction = System.getProperty("jiraInteraction",propLoad("jiraInteraction"));

private static String propLoad(String key){
    Properties prop = new Properties();
    String value=null;
    try {
        URI url = new GetProperties().getClass().getClassLoader().getResource("config.properties").toURI();
        String path = url.getPath();
        InputStream in = new FileInputStream(path);
        prop.load(in);
        value = prop.getProperty(key);
    }
    catch (Exception e){
        e.printStackTrace();
    }
    return value;
}

}

