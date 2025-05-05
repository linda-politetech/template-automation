import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class DeleteChatPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  private Element = {
    selectChat: "(//a[contains(@class,'group flex')])[1]",
    sidebarBtn: "//div[contains(@class,'relative cursor-pointer')]",
    threeDotsBtn: "(//a[contains(@class,'group flex')]//div)[1]",
    deleteChatOtp: "//p[text()='Delete']",
    deleteChatBtn: "(//button[@type='button']/following-sibling::button)[2]",
    deleteSuccessMsg: "//span[contains(text(),'Deleted chat successfully')]",
  };

  async getCookies() {
    const cookies = await this.page.context().cookies();
    console.log("Cookies:", cookies);
    return cookies;
  }

  async openChatList() {
    await this.getCookies();
    await this.base.waitAndClick(this.Element.sidebarBtn);
  };

  async selectChat() {
    await this.base.waitAndClick(this.Element.selectChat);
  };

  async clickThreeDots() {
    await this.base.waitAndClick(this.Element.threeDotsBtn);  
  };

  async selectDeleteOtpion() {
    await this.base.waitAndClick(this.Element.deleteChatOtp);  
  };

  async clickDeleteChatBtn() {
    await this.base.waitAndClick(this.Element.deleteChatBtn);   
  };

  async verifyDeleteSuccessMsg() {  
    const selectChat = this.page.locator(this.Element.selectChat);
    await expect(selectChat).toBeVisible();
    const element = this.page.locator(this.Element.deleteSuccessMsg);
    await element.waitFor({
        state: 'visible',
        timeout: 5000,
    });
    await expect(element).toBeVisible();
  }

}

