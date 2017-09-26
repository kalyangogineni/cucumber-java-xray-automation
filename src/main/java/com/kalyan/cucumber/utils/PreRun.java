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

    public PreRun (Class myclass) throws InitializationError, IOException{
        super(myclass);
    }

    protected Runtime createRuntime(ResourceLoader resourceLoader, ClassLoader classLoader, RuntimeOptions runtimeOptions) throws InitializationError, IOException{


            JiraInteraction jiraInteraction = new JiraInteraction();
            try {
                jiraInteraction.exportTests(GetSystemProperties.auth, GetSystemProperties.jiraUrl, GetSystemProperties.jiraExecutionId, GetSystemProperties.featureFileDir);
            }catch (Exception e){
                e.printStackTrace();
            }
            return super.createRuntime(resourceLoader, classLoader, runtimeOptions);

    }
}
