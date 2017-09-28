package com.kalyan.cucumber.stepdefs;

import com.kalyan.cucumber.api.RestApiCalls;
import com.kalyan.cucumber.utils.GetProperties;
import cucumber.api.java.en.When;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class SearchStepDefs {

    private RestApiCalls requestManager;

    public SearchStepDefs(RestApiCalls requestManager){
        this.requestManager = requestManager;
    }
    @When("^I request user information with (\\w+) and (\\w+)$")
    public void GetUserInformation(String userName, String Password) throws Throwable {
        String appUrl = GetProperties.appUrl;
        requestManager.getCall(appUrl+"?userName=Test&password=Test","application/json", "test");

    }

}
