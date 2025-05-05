import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import ChatPage from "../../pages/chatPage";

let chatPage: ChatPage
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When('User types message {string}', async function (message) {
  chatPage = new ChatPage(fixture.page);
  await chatPage.defineChat(message);
});

When('User clicks on the "Send" button', async function () {
  await chatPage.sendMessage();
});

Then('User should see the chat on sidebar', async function () {
  await chatPage.seeChatOnSideBar();

});