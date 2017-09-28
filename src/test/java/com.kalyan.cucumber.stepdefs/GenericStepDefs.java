package com.kalyan.cucumber.stepdefs;

import com.kalyan.cucumber.api.RestApiCalls;
import cucumber.api.java.en.Then;
import org.json.simple.JSONObject;

import static org.junit.Assert.*;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class GenericStepDefs {
    private RestApiCalls requestManager;

    public GenericStepDefs(RestApiCalls requestManager){
        this.requestManager=requestManager;
    }

    @Then("^I should get http respose code as (\\d+)$")
    public void checkStatusCode(int expectedCode) throws Throwable {
       assertTrue(expectedCode==requestManager.getResponseCode());
    }

    @Then("^I should get the valid response$")
    public void i_should_get_the_valid_response() throws Throwable {
        org.json.JSONObject responseBody = requestManager.getResponseJson();

        //do your validaton for valid response

    }

}
