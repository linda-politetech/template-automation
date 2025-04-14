import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { error } from "winston";

export default class LoginPage {
  private base: PlaywrightWrapper;
  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }
  private Elements = {
    loginMicrosoftBtn: "//p[normalize-space(text())= 'Continue with Microsoft Account']",
    emailField: "//input[@name='loginfmt']",
    continueBtn: "//input[@data-report-event='Signin_Submit']",
    passwordField: "//input[@name='passwd']",
    loginBtn: "//input[@id='idSIButton9']",
    yesBtn:"//input[@id='idSIButton9']",
    successMsg: "//span[normalize-space()='Log in successfully']",
    errorUsernameMsg: "//div[@id='usernameError']",
    errorPasswordMsg: "//div[@id='passwordError']",
  };

  async clickLoginMicrosoft() {
    await this.base.waitAndClick(this.Elements.loginMicrosoftBtn);
  };

  async navigateToMicrosoftLoginPage() {
    await this.base.goto("");
  };

  async defineEmail(email) {
    await this.base.waitAndFill(this.Elements.emailField, email);
  };

  async definePassword(password) {
    await this.base.waitAndFill(this.Elements.passwordField, password);
  };

  async clickContinue() {
    await this.base.waitAndClick(this.Elements.continueBtn);
  };

  async clickLoginBtn() {
    await this.base.waitAndClick(this.Elements.loginBtn);
  };

  async clickYesBtn() {
    await this.base.waitAndClick(this.Elements.yesBtn);
  };

  // async navigateToDashboard() {
  //   await this.base.goto("https://ai.politetech.com/");
  // };

  async successMsg() {
    const element = this.page.locator(this.Elements.successMsg);
    await element.waitFor({timeout: 5000,
      state: "visible" });
    await expect(element).toBeVisible();
  };

  async errorUsernameMsg() {
    const element = this.page.locator(this.Elements.errorUsernameMsg);
    await element.waitFor({timeout: 5000,
      state: "visible" });
    await expect(element).toBeVisible();
  };

  async errorPasswordMsg() {
    const element = this.page.locator(this.Elements.errorPasswordMsg);
    await element.waitFor({timeout: 5000,
      state: "visible" });
    await expect(element).toBeVisible();
  };
}