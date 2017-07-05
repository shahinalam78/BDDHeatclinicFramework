package com.shiftedtech.bdd.framework.steps; /**
 * Created by PaxoStudent on 7/3/2017.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

// first we need @ called RunWith(Cucumber.class)
// plugin need for reporting
// features need for where  the features file is
// plese tag mark which  Scenario is run

@RunWith(Cucumber.class)
@CucumberOptions(
        //dryRun = true,
        //strict = true,
        //monochrome = true,
        tags = {"@DD"},
        // tags = { "@functional","@debug" }, /*AND*/
        //tags = { "@functional,@debug" }, /*OR*/
        //tags = { "@functional,@debug","@debug" }, /*AND-OR*/
        features = "src/test/resources/features",
        //glue = {"com.shiftedtech.heatclinic.framework.steps"},
        plugin = {
                "pretty:target/cucumber-test-report/cucumber-pretty.txt",
                "html:target/cucumber-test-report",
                "json:target/cucumber-test-report/cucumber-report.json",
                "junit:target/cucumber-test-report/test-report.xml",
                "json:target/test-report.json"
        }
)

public class BDDHeatclinicRunner {
}
