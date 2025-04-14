import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class AuthExamplePage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    newChatBtn: '//p[text()="New chat"]',
    chatInput: '//textarea[@placeholder="Type message"]',
  };

  async getCookies() {
    const cookies = await this.page.context().cookies();
    console.log("Cookies: ", cookies);
    return cookies;
  }

  async checkForLoggedIn() {
    await this.getCookies();
    const chatInput = this.page.locator(this.Elements.chatInput);
    await expect(chatInput).toBeVisible();
  }
}
