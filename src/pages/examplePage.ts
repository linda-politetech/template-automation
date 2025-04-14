import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class ExamplePage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    loginMsg:
      "//h3[normalize-space(text()='Please sign in to continue accessing to the system.')]",
  };

  async navigateToPoliteAssist() {
    await this.base.goto(process.env.BASEURL);
  }

  async accessSuccessfullyAsAnonymous() {
    const loginMsg = await this.page.locator(this.Elements.loginMsg);
    await expect(loginMsg).toBeVisible();
  }
}
