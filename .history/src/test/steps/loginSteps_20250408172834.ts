import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../../pages/loginPage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";

let loginPage: LoginPage;
let assert: Assert;


When('I click on "Continue with Microsoft account" button', async function () 
{
    await loginPage.clickLoginMicrosoft();
});


Then('I will be redirected to Microsoft login page', async function () 
{
    
});


When('User enter a valid username as {string}', async function (username) 
{
    await loginPage.d
});


When('User click on "Continue" button', async function (string) 
{
    
});


When('User enter a valid password as {string}', async function (string) 
{
    
});


When('User click on "Login" button', async function (string) 
{
    
});


When('User click on "Yes" button', async function (string)
{
    
});


Then('User should be redirected to the dashboard', async function () 
{
    
});