package com.shiftedtech.bdd.framework.steps;

import com.shiftedtech.bdd.framework.steps.utils.SpecializedScreenRecorder;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.ChromeDriverManager;
import org.monte.screenrecorder.ScreenRecorder;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.File;
import java.util.concurrent.TimeUnit;

/**
 * Created by PaxoStudent on 7/3/2017.
 */
public class Hooks extends StepBase {

    private ScreenRecorder screenRecorder;
    private String executionFeature;
    private String executingScenario;
    public int DEFAULT_IMPLICITLY_WAIT_TIME = 10;

    @Before
    public void setUp(Scenario scenario) throws Exception {
        driver.manage().timeouts().implicitlyWait(DEFAULT_IMPLICITLY_WAIT_TIME, TimeUnit.SECONDS);
        driver.manage().window().maximize();

        String scenarioId = scenario.getId();
        String featureName = scenarioId.substring(0, scenarioId.indexOf(";"));

        this.executionFeature = featureName;
        this.executingScenario = scenario.getName();

        startRecording();
    }

    @After
    public void tearDown(Scenario scenario) throws Exception {

        if (scenario.isFailed()) {
            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); //stick it in the report
        }

        DriverFactory.getInstance().removeDriver();
        stopRecording();

    }


    private void startRecording() throws Exception {
        String useDir = System.getProperty("user.home");

        File file = new File(useDir + "/CucumberVideos/"
                + this.executionFeature.replaceAll("[^a-zA-Z0-9.-]", "_"));
        String fileNameStartWith = this.executingScenario.replaceAll(
                "[^a-zA-Z0-9.-]", "_");

        this.screenRecorder = new SpecializedScreenRecorder(file, fileNameStartWith);
        this.screenRecorder.start();

    }

    private void stopRecording() throws Exception {
        this.screenRecorder.stop();
    }
}
