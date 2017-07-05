package com.shiftedtech.bdd.framework.steps;

import org.openqa.selenium.WebDriver;

/**
 * Created by PaxoStudent on 7/4/2017.
 */
public class StepBase {

    protected WebDriver driver = DriverFactory.getInstance().getDriver();

}
