import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    loginMicrosoftBtn: 
        "//p[normalize-space(text())= 'Continue with Microsoft Account']",
    emailField: 
        "//input[@placeholder='Email, điện thoại hoặc Skype']",
    continueBtn: 
        "//input[@id='idSIButton9']",
    passwordField: 
        "//input[@placeholder='Mật khẩu']",
    loginBtn: 
        "//input[@id='idSIButton9']",
    yesBtn:
        ""


  };


}
