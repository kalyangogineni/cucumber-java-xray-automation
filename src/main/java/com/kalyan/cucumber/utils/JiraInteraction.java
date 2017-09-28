package com.kalyan.cucumber.utils;

import com.jayway.restassured.config.RestAssuredConfig;
import com.jayway.restassured.config.SSLConfig;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
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

    public void importResults(String auth, String jiraUrl, String testResultdir) throws Exception {

        String uploadFiledir = System.getProperty("user.dir")+"/"+testResultdir;
        System.out.println("################################# uploading file"+uploadFiledir);
        org.json.simple.parser.JSONParser parser = new JSONParser();
        Object jsonBody = parser.parse(new FileReader(uploadFiledir));
        System.out.println(jsonBody);
        JSONArray obj = (org.json.simple.JSONArray) jsonBody;
        String json = obj.toString();
        try {
            com.jayway.restassured.response.Response response = given().config(RestAssuredConfig.config().sslConfig(SSLConfig.sslConfig().allowAllHostnames()))
                    .relaxedHTTPSValidation().contentType("application/json").header("Authorization", "Basic " + auth)
                    .body(json).expect().statusCode(200)
                    .when()
                    .post(jiraUrl + "/rest/raven/1.0/import/execution/cucumber").then().extract().response();
            System.out.println("#################"+ response.asString());
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    private static void downloadUsingStream(String urlStr, String auth, String file) throws Exception{
        String featureFile;
        String filePath;
        String currentDir = System.getProperty("user.dir");
        System.out.println(currentDir);
        String fileFormat = GetProperties.downloadFileFormat;
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
