import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import CommonPage from "../../pages/commonPage";
import Assert from "../../helper/wrapper/assert";

let commonPage: CommonPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When("User clicks on the sidebar to open the chat list", async function () {
    commonPage = new CommonPage(fixture.page);
    assert = new Assert(fixture.page);
    await commonPage.openChatList();
});