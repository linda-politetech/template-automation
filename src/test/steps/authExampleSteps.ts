import { Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import AuthExamplePage from "../../pages/authExamplePage";

let authExamplePage: AuthExamplePage;

setDefaultTimeout(60 * 1000 * 2);

Then("User should be logged in", async function () {
  authExamplePage = new AuthExamplePage(fixture.page);
  await authExamplePage.checkForLoggedIn();
});
