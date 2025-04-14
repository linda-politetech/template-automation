import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";


export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    loginMicrosoftBtn: "//p[normalize-space(text())= 'Continue with Microsoft Account']",
    usernameInput: "//input[@name='loginfmt']",
    continueButton: "//input[@data-report-event='Signin_Submit']",
    passwordInput: "//input[@name='passwd']",
    submitButton: "//input[@id='idSIButton9']",
    yesButton: "//input[@id='idSIButton9']",
    successMsg: "//span[normalize-space()='Log in successfully']",
    errorMsgForPwd: "//div[@id='passwordError']",
    errorMsgForUsername: "//div[@id='usernameError']",
  };

  async clickLoginMicrosoft() {
    await this.base.waitAndClick(this.Elements.loginMicrosoftBtn);
  };

  async navigateToMicrosoftLoginPage() {
    await this.base.goto(process.env.BASEURL)
  };

  async enterUsername(username) {
    await this.base.waitAndFill(this.Elements.usernameInput, username);
  }

  async clickContinue() {
    await this.base.waitAndClick(this.Elements.continueButton);
  }

  async enterPassword(password) {
    await this.base.waitAndFill(this.Elements.passwordInput, password);
  }

  async clickSubmitBtn() {
    await this.base.waitAndClick(this.Elements.submitButton);
  }

  async clickYesBtn() {
    await this.base.waitAndClick(this.Elements.yesButton);
  }


  async successMsg() {
    const element = this.page.locator(this.Elements.successMsg);
    await element.waitFor({timeout: 5000,
      state: "visible"
    });
    await expect(element).toBeVisible();
  };

  async enterInvalidPassword(password) {
    await this.base.waitAndFill(this.Elements.passwordInput, password);
  };

  async errorMsgForPwd() {
    const element = this.page.locator(this.Elements.errorMsgForPwd);
    await element.waitFor({timeout: 5000,
      state: "visible"
    });
    await expect(element).toBeVisible();
  };

  async errorMsgForUsername() {
    const element = this.page.locator(this.Elements.errorMsgForUsername);
    await element.waitFor({timeout: 5000,
      state: "visible"
    });
    await expect(element).toBeVisible();
  }



}
