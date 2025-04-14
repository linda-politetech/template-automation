import { Given, When, Then } from "@cucumber/cucumber";
import ExamplePage from "../../pages/examplePage";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";

let examplePage: ExamplePage;
let assert: Assert;

Given("I open the Polite Assist website", async function () {
  examplePage = new ExamplePage(fixture.page);
  assert = new Assert(fixture.page);
  await examplePage.navigateToPoliteAssist();
});

Then(
  "I should access the website successfully as an anonymous user",
  async function () {
    await examplePage.accessSuccessfullyAsAnonymous();
  }
);
