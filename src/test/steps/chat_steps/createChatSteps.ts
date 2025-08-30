import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import CreateChatPage from "../../../pages/chat_pages/createChatPage";
import { fixture } from "../../../hooks/pageFixture";
import Assert from "../../../helper/wrapper/assert";

let createChatPage: CreateChatPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When ("User types message as {string}", async function (message) {
    createChatPage = new CreateChatPage(fixture.page);
    await createChatPage.defineChat(message);
});

When ('User clicks on the "Send" button', async function () {
    await createChatPage.sendChat();
});

Then ('User should see the chat on sidebar', async function () {
    await createChatPage.seeChatOnSidebar();
});
