import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";

let loginPage: LoginPage;
let assert: Assert;


When('I click on "Continue with Microsoft account" button', async function () {
    loginPage = new LoginPage(fixture.page);
    await loginPage.clickLoginMicrosoft();
});

Then('I will be redirected to Microsoft login page', async function () {
    
});

When('User enter a email as {string}', async function (email) {
    await loginPage.defineEmail(email);
});

When('User click on "Continue" button', async function () {
    await loginPage.clickContinue();
});

When('User enter a password as {string}', async function (password) {
    await loginPage.definePassword(password);
});


When('User click on "Login" button', async function () {
    await loginPage.clickLoginBtn();
});


When('User click on "Yes" button', async function (){
    await loginPage.clickYesBtn();
});

Then('User should be redirected to the dashboard', async function () {
    // await loginPage.successMsg();
});

Then ('User login unsuccessfully and display error message', async function () {
    await loginPage.errorUsernameMsg();
} );

Then ('User see an error message with "Your password is incorrect"', async function () {
    await loginPage.errorPasswordMsg();
} );
