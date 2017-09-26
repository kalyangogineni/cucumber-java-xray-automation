package com.kalyan.cucumber.stepdefs;

import com.kalyan.cucumber.api.RestApiCalls;
import com.kalyan.cucumber.utils.GetSystemProperties;
import com.kalyan.cucumber.utils.JiraInteraction;
import com.kalyan.cucumber.utils.PreRun;
import cucumber.api.CucumberOptions;
import org.picocontainer.DefaultPicoContainer;
import org.picocontainer.MutablePicoContainer;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

/**
 * Created by kgogin1 on 9/25/17.
 */
@RunWith(PreRun.class)
@CucumberOptions(
        plugin={"pretty", "json:target/cucumber/Destination/cucumber.json", "html:target/cucumber/Destination/HTML_Reports"},
        features={"src/test/resources/featurefile"})

public class RunTest {
    public static JiraInteraction jiraInteraction = new JiraInteraction();
    public RunTest() {
        MutablePicoContainer picoContainer = new DefaultPicoContainer();
        picoContainer.addComponent(RestApiCalls.class);
        picoContainer.addComponent(SearchStepDefs.class);
        picoContainer.addComponent(GenericStepDefs.class);
    }


    @AfterClass
    public static void uploadResults(){
        jiraInteraction.importResults(GetSystemProperties.auth, GetSystemProperties.jiraUrl, GetSystemProperties.testResultdir);
    }
}
