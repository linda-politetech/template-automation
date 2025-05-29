import { Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class CommonPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        sideBarBtn: "//div[contains(@class,'relative cursor-pointer')]",
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
}