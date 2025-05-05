import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import RenameChatPage from '../../pages/renameChatPage';

let renameChatPage: RenameChatPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When ('User clicks on the sidebar button to open the sidebar', async function () {
    renameChatPage = new RenameChatPage(fixture.page);
    await renameChatPage.openChatList();
});

When ('User selects the conversation to rename', async function () {
    await renameChatPage.selectChat();
});

When ('User clicks on the three dots button', async function () {
    await renameChatPage.clickThreeDots();
}); 

When ('User selects the "Rename" option', async function () {   
    await renameChatPage.clickRenameConvo();
});

When ('User types the new name {string}', async function (newName) {
    await renameChatPage.renameConvo(newName);
});

When ('User clicks on the "Save" button', async function () {
    await renameChatPage.clickSaveBtn();
});

Then ('User should see the conversation renamed successfully', async function (){
    await renameChatPage.verifyRenameSuccessMsg();
});
