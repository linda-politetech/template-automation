import { LoginPage } from 'src/pages\loginPage.ts';
import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    continueWithMSBtn:
      "button[contains(text(),'Continue with Microsoft Account')]",
  };

  async navigateToPoliteAssist() {
    await this.base.goto(process.env.BASEURL);
  }

  async getPageTitle() {
    return this.page.title();
  }
}
