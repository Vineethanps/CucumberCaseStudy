package casestudy;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:src/cucumber-report","json:src/cucumber-report/reports1.json"},features= {"src/test/resources/casestudy/register.feature","src/test/resources/casestudy/casestudy2.feature",
"src/test/resources/casestudy/casestudy3.feature","src/test/resources/casestudy/casestudy4.feature"})
public class RunCaseStudy {

}
