import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import DeleteChatPage from "../../pages/deleteChatPage";

let deleteChatPage: DeleteChatPage
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When('User clicks the sidebar button to open the sidebar', async function () {
  deleteChatPage = new DeleteChatPage(fixture.page);
  await deleteChatPage.openChatList();
});

When('User selects the conversation to delete', async function () {
  await deleteChatPage.selectChat();
});

When('User clicks the three dots button', async function () {
  await deleteChatPage.clickThreeDots();
}); 

When('User selects the "Delete" option', async function () {   
  await deleteChatPage.selectDeleteOtpion();
});

When('User clicks on the "Delete" button in the confirmation dialog', async function () {
  await deleteChatPage.clickDeleteChatBtn();
});

Then('User should see the conversation deleted successfully', async function (){
  await deleteChatPage.verifyDeleteSuccessMsg();
});

