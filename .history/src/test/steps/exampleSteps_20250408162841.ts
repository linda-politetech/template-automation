import { Given, When, Then } from "@cucumber/cucumber";
import ExamplePage from "../../pages/examplePage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";

let examplePage: ExamplePage;
let assert: Assert;
/
Given("I open the Polite Assist website", async function () {
  examplePage = new ExamplePage(fixture.page);
  assert = new Assert(fixture.page);
  await examplePage.navigateToPoliteAssist();
});

Then("the title should be {string}", async function (expectedTitle) {
  const title = await examplePage.getPageTitle();
  if (title !== expectedTitle) {
    throw new Error(
      `Expected title to be "${expectedTitle}" but got "${title}"`
    );
  }
});
