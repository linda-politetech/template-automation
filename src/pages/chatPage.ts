import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ChatPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Element = {
    chatInput: '//textarea[@placeholder="Type message"]',
    sendBtn: '//button[@type="submit"]',
    nameChat: "(//a[contains(@class,'group flex')])[1]",
    sideBarBtn: "//div[contains(@class,'relative cursor-pointer')]"
  
};

async getCookies() {
    const cookies = await this.page.context().cookies();
    console.log("Cookies:", cookies);
    return cookies;
}

async defineChat(message) {
    await this.getCookies();
    await this.base.waitAndFill(this.Element.chatInput, message);
};

async sendMessage() {
  await this.base.waitAndClick(this.Element.sendBtn);

};
 
async seeChatOnSideBar() {
  await this.base.waitAndClick(this.Element.sideBarBtn);
  const nameChat = this.page.locator(this.Element.nameChat);
  await expect(nameChat).toBeVisible();

};
}
