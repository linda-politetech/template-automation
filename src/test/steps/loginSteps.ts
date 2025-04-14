import { Given, Then } from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import Assert from "../../helper/wrapper/assert";
import { fixture } from "../../hooks/pageFixture";

let loginPage: LoginPage;
let assert: Assert;

Given('User is on the login page', async function () {
  loginPage = new LoginPage(fixture.page);
  assert = new Assert(fixture.page);
  await loginPage.navigateToMicrosoftLoginPage();
  await loginPage.clickLoginMicrosoft();
});


Given('User enters username {string}', async function (username) {
  await loginPage.enterUsername(username);
  await loginPage.clickContinue();
});

Given('User enters password {string}', async function (password) {
  await loginPage.enterPassword(password);
});

Given('User clicks on the login button', async function () {
  await loginPage.clickSubmitBtn();
  await loginPage.clickYesBtn();
});

Then('User should be redirected to the dashboard page', async function () {
  await loginPage.successMsg();
});

// Given('User enters invalid password {string}', async function (password) {
//   await loginPage.enterInvalidPassword(password);
// });

Then('User should see an error message', async function () {
  await loginPage.errorMsgForPwd();
});

Then('System notifies that the username is not valid', async function () {
  await loginPage.errorMsgForUsername();
});
