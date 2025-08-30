import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrappers";

export default class CreateChatPage {
    private base: PlaywrightWrapper;
    
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }
    
    private Elements = {
        chatInput: '//textarea[@placeholder="Type message"]',
        sendButton: '//button[@type="submit"]',
        nameChat: "(//a[contains(@class,'group flex')])[1]",
        sideBarBtn: "//div[contains(@class,'relative cursor-pointer')]"
    };
    
    async getCookies() {
        const cookies = await this.page.context().cookies();
        console.log("Cookies: ", cookies);
        return cookies;
    }

    async defineChat(message) {
        await this.getCookies();
        await this.base.waitAndFill(this.Elements.chatInput, message);
    };

    async sendChat() {
        await this.base.waitAndClick(this.Elements.sendButton);
        
    };

    async seeChatOnSidebar() {
        await this.base.waitAndClick(this.Elements.sideBarBtn);
        const nameChat = this.page.locator(this.Elements.nameChat);
        await expect(nameChat).toBeVisible();
    };

   
}