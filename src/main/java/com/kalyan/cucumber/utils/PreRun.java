package com.kalyan.cucumber.utils;

import cucumber.api.junit.Cucumber;
import cucumber.runtime.Runtime;
import cucumber.runtime.RuntimeOptions;
import cucumber.runtime.io.ResourceLoader;
import org.junit.runners.model.InitializationError;


import java.io.IOException;

/**
 * Created by kgogin1 on 9/25/17.
 */
public class PreRun extends Cucumber {

    public PreRun(Class myclass) throws InitializationError, IOException {
        super(myclass);
    }

    protected Runtime createRuntime(ResourceLoader resourceLoader, ClassLoader classLoader, RuntimeOptions runtimeOptions) throws InitializationError, IOException {

        if (GetProperties.jiraInteraction.equals("true")) {
            JiraInteraction jiraInteraction = new JiraInteraction();
            try {
                jiraInteraction.exportTests(GetProperties.auth, GetProperties.jiraUrl, GetProperties.jiraExecutionId, GetProperties.featureFileDir);
            } catch (Exception e) {
                e.printStackTrace();
            }

        } else {
            System.out.println("Not downloading tests from jira");
        }
        return super.createRuntime(resourceLoader, classLoader, runtimeOptions);
    }
}
