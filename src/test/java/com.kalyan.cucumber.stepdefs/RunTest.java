package com.kalyan.cucumber.stepdefs;

import com.kalyan.cucumber.api.RestApiCalls;
import com.kalyan.cucumber.utils.GetProperties;
import com.kalyan.cucumber.utils.JiraInteraction;
import com.kalyan.cucumber.utils.PreRun;
import cucumber.api.CucumberOptions;
import org.picocontainer.DefaultPicoContainer;
import org.picocontainer.MutablePicoContainer;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.BufferedReader;
import java.io.FileReader;

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
    public static void uploadResults() throws Exception {
        final BufferedReader reader = new BufferedReader(new FileReader(System.getProperty("user.dir")+"/"+ GetProperties.testResultdir));
        if (GetProperties.jiraInteraction.equals("true")) {
            Thread t1 = new Thread("myRunnable"){
                public void run(){
                    try {
                        while (reader.readLine() == null) {
                            System.out.println("File is empty");
                        }
                        System.out.println("found file");
                        jiraInteraction.importResults(GetProperties.auth, GetProperties.jiraUrl, GetProperties.testResultdir);
                    }catch (Exception e){
                        e.printStackTrace();
                    }
                }
            };
            t1.start();
            }else{
            System.out.println("Not uploading back to jira");
        }
    }
}
