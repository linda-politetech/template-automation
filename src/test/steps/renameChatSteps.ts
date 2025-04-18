import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import RenameChatPage from "../../pages/renameChatPage";

let renameChatPage: RenameChatPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When ("User clicks on the sidebar to open the chat list", async function () {
    renameChatPage = new RenameChatPage(fixture.page);
    await renameChatPage.openChatList();

});

When ('User selects a chat from the list', async function () {
    await renameChatPage.selectChat();
});

When ('User clicks on the three-dot button', async function () {
    await renameChatPage.clickThreeDots();
});

When ('User selects the "Rename" option', async function () {
    await renameChatPage.clickRenameChat();
});

When ('User types new name as {string}', async function (newName) {
    await renameChatPage.renameChat(newName);
});

When ('User clicks on the "Save" button', async function () {
    await renameChatPage.clickSave();
});

Then ('User should see the chat renamed successfully', async function () {
    await renameChatPage.verifyChatRenamed();
});