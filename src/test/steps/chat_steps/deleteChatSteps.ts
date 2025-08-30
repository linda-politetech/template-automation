import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../../hooks/pageFixture";
import Assert from "../../../helper/wrapper/assert";
import DeleteChatPage from "../../../pages/chat_pages/deleteChatPage";

let deleteChatPage: DeleteChatPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When ('User selects the "Delete" option', async function () {
    deleteChatPage = new DeleteChatPage(fixture.page);
    assert = new Assert(fixture.page);
    await deleteChatPage.clickDeleteChat();
});

When ('User confirms the deletion', async function () {
    await deleteChatPage.clickDeleteButton();
});

Then ('User should see the chat deleted successfully', async function () {
    await deleteChatPage.verifyChatDeleted();
});
