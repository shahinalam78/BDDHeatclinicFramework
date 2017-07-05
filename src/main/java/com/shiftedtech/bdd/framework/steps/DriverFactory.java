package com.shiftedtech.bdd.framework.steps;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by PaxoStudent on 7/4/2017.
 */

public class DriverFactory {

    public static final String USERNAME = "mdalam5";
    public static final String AUTOMATE_KEY = "QaGxMRzKfZSGCTk9ewrX";
    public static final String BROWSER_STACK_REMOTE_URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";


    private static DriverFactory instance = new DriverFactory();

    private DriverFactory() {
        //Do-nothing..Do not allow to initialize this class from outside
    }


    public static DriverFactory getInstance() {
        return instance;
    }

    ThreadLocal<WebDriver> driver = new ThreadLocal<WebDriver>() // thread local driver object for webdriver
    {
        @Override
        protected WebDriver initialValue() {

            /*ChromeDriverManager.getInstance().setup();
            return new ChromeDriver();*/
            DesiredCapabilities caps =  DesiredCapabilities.chrome();
            caps.setCapability("browser", "Chrome");
            caps.setCapability("browser_version", "51.0");
            caps.setCapability("os", "Windows");
            caps.setCapability("os_version", "7");
            caps.setCapability("resolution", "1024x768");
            try {
                return new RemoteWebDriver(new URL(BROWSER_STACK_REMOTE_URL), caps);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }

            return null;
        }
    };

    public WebDriver getDriver() // call this method to get the driver object and launch the browser
    {
        return driver.get();
    }

    public void removeDriver() // Quits the driver and closes the browser
    {
        driver.get().quit();
        driver.remove();
    }
}

