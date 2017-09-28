package com.kalyan.cucumber.api;

import com.jayway.restassured.config.RestAssuredConfig;
import com.jayway.restassured.config.SSLConfig;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

import static com.jayway.restassured.RestAssured.given;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class RestApiCalls {
    private int responseCode;
    private String responseMessage;
    private JSONObject responseJson;
    private String contentType;
    private String header;
    private Map<String, String> storedResponseValues = new HashMap<String, String>();

    private String apiKey;

    private void setFields(com.jayway.restassured.response.Response response) {
        responseCode=response.statusCode();
        responseMessage=response.asString();
        contentType=response.getContentType();
        header=response.getHeader(com.jayway.restassured.response.Header.class.toString());
        try {
            responseJson = new JSONObject(responseMessage);
        } catch (JSONException ex) {
        }
    }

    public void getCall(String url, String headers, String userAgent){
        com.jayway.restassured.response.Response response= given().config(RestAssuredConfig.config().sslConfig(SSLConfig.sslConfig().allowAllHostnames())).relaxedHTTPSValidation().header("Content-Type",headers)
                .header("user-Agent",userAgent)
                .when().get(url).then().extract().response();

        setFields(response);

    }

    public void storeValue(String name, String value) {
        storedResponseValues.put(name, value);
    }

    public String retrieveValue(String name) {
        return storedResponseValues.get(name);
    }

    public boolean hasValue(String name) {
        return storedResponseValues.containsKey(name);
    }

    public int getResponseCode(){
        return responseCode;
    }
    public String getResponseMessage(){
        return responseMessage;
    }
    public JSONObject getResponseJson(){
        return responseJson;
    }
    public String getContentType(){
        return contentType;
    }
}
