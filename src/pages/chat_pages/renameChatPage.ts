import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrappers";

export default class RenameChatPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        nameChat: "(//a[contains(@class,'group flex')])[1]",
        sideBarBtn: "//div[contains(@class,'relative cursor-pointer')]",
        threeDotsBtn: "(//a[contains(@class,'group flex')]//div)[1]",
        renameChatBtn: "//p[normalize-space(text())='Rename']",
        renameInput: "(//div[contains(@class,'flex flex-col')]//input)[3]",
        saveButton: "(//button[@type='button']/following-sibling::button)[2]",
        renameSuccessMsg: "(//div[@role='alert']//div)[2]"
    };

    async getCookies() {
        const cookies = await this.page.context().cookies();
        console.log("Cookies: ", cookies);
        return cookies;
    } 

    async openChatList() {
        await this.getCookies();
        await this.base.waitAndClick(this.Elements.sideBarBtn);
    }

    async selectChat() {
        await this.base.waitAndClick(this.Elements.nameChat);
    }

    async clickThreeDots() {
        await this.base.waitAndClick(this.Elements.threeDotsBtn);
    }

    async clickRenameChat() {
        await this.base.waitAndClick(this.Elements.renameChatBtn);
    }

    async renameChat(newName) {
        await this.base.waitAndDelete(this.Elements.renameInput);
        await this.base.waitAndFill(this.Elements.renameInput, newName);
    }

    async clickSave() {
        await this.base.waitAndClick(this.Elements.saveButton);
    }

    async verifyChatRenamed() {
        const nameChat = this.page.locator(this.Elements.nameChat);
        await expect(nameChat).toBeVisible();
        const element = this.page.locator(this.Elements.renameSuccessMsg);
        await element.waitFor({
            timeout: 5000,
            state: "visible"
        });
        await expect(element).toBeVisible();
    }

}