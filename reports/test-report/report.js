$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "I want to login to use the woolworths app.",
  "description": "",
  "id": "i-want-to-login-to-use-the-woolworths-app.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Successful login",
  "description": "",
  "id": "i-want-to-login-to-use-the-woolworths-app.;successful-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter my \"login\" and my \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I can successfully login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.i_am_on_the_login_page()"
});
formatter.result({
  "duration": 129299585,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat Steps.LoginStepdefs.i_am_on_the_login_page(LoginStepdefs.java:13)\n\tat ✽.Given I am on the login page(login.feature:6)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 27
    }
  ],
  "location": "LoginStepdefs.iEnterMyAndMy(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepdefs.i_can_successfully_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("sample.feature");
formatter.feature({
  "line": 2,
  "name": "To test my cucumber test is running I want to run a sample feature file.",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "cucumber setup",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "sample feature file is ready",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I run the feature file",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "run should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.givenStatement()"
});
formatter.result({
  "duration": 308637,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.whenStatement()"
});
formatter.result({
  "duration": 53685,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.thenStatment()"
});
formatter.result({
  "duration": 110191,
  "status": "passed"
});
});