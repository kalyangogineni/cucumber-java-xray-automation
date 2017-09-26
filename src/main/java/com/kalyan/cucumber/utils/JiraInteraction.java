package com.kalyan.cucumber.utils;


import java.io.*;
import java.net.URL;
import java.net.URLConnection;
import static com.jayway.restassured.RestAssured.given;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class JiraInteraction {


    public void exportTests(String auth, String jiraUrl, String jiraExecutionId, String featureFileDir)  throws Exception {

      String url = jiraUrl+"/rest/raven/1.0/export/test?keys="+jiraExecutionId;
      downloadUsingStream(url,auth, featureFileDir);

    }

    public void importResults(String auth, String jiraUrl, String testResultdir) {
        String currentDir = System.getProperty("user,dir");
        com.jayway.restassured.response.Response response = given().multiPart("file",new File(currentDir+"/"+testResultdir))

    }

    private static void downloadUsingStream(String urlStr, String auth, String file) throws Exception{
        String featureFile;
        String filePath;
        String currentDir = System.getProperty("user.dir");
        System.out.println(currentDir);
        String fileFormat = GetSystemProperties.downloadFileFormat;
        filePath = currentDir+"/"+file;
        if(fileFormat.equals("zip")){
            featureFile = filePath+"/" + "feature.zip";
        }else{
            featureFile=filePath+"/"+ "test.feature";
        }

        URL url = new URL(urlStr);
        URLConnection urlConnection = url.openConnection();
        urlConnection.setRequestProperty("Authorization","Basic "+auth);
        InputStream inputStream = urlConnection.getInputStream();
        OutputStream outputStream = new FileOutputStream(featureFile);
        byte[] b = new byte[2048];
        int length;

        while ((length = inputStream.read(b)) != -1) {
            outputStream.write(b, 0, length);
        }

        inputStream.close();
        outputStream.close();
        if(fileFormat.equals("zip")){
            UnzipFile unzipFile = new UnzipFile();
            unzipFile.unzipFunction(filePath,featureFile);

        }


    }
}
