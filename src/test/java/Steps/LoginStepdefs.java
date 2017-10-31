package Steps;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @Given("^I am on the login page$")
    public void i_am_on_the_login_page()  {
        System.out.println("Inside given statement");
        Assert.assertTrue(false);
    }

    @Then("^I can successfully login$")
    public void i_can_successfully_login()  {
        System.out.println("Inside I can successfully login");
    }


    @When("^I enter my \"([^\"]*)\" and my \"([^\"]*)\"$")
    public void iEnterMyAndMy(String login, String password)  {
        System.out.println("your login id:"+ login + " and your password is:"+ password);
    }
}
