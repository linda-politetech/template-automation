import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrappers";

export default class DeleteChatPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        deleteChatBtn: "//p[normalize-space(text())='Delete']",
        deleteButton: "(//button[@type='button']/following-sibling::button)[2]",
        deleteSuccessMsg: "(//div[@role='alert']//div)[2]",
    };

    async getCookies() {
        const cookies = await this.page.context().cookies();
        console.log("Cookies: ", cookies);
        return cookies;
    }

    async clickDeleteChat() {
        await this.base.waitAndClick(this.Elements.deleteChatBtn);
    }

    async clickDeleteButton() {
        await this.base.waitAndClick(this.Elements.deleteButton);
    }

    async verifyChatDeleted() {
        const element = this.page.locator(this.Elements.deleteSuccessMsg);
        await element.waitFor({
            timeout: 5000,
            state: "visible"
        });
        await expect(element).toBeVisible();
    }

}