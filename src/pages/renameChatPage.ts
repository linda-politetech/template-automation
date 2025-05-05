import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class RenameChatPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);

  }

  private Element = {
    nameConvo: "(//a[contains(@class,'group flex')])[1]",
    sidebarBtn: "//div[contains(@class,'relative cursor-pointer')]",
    threeDotsBtn: "(//a[contains(@class,'group flex')]//div)[1]",
    renameConvoBtn: "//p[text()='Rename']",
    renameInput: "(//div[contains(@class,'flex flex-col')]//input)[3]",
    saveBtn: "(//button[@type='button']/following-sibling::button)[2]",
    renameSuccessMsg: "(//div[@role='alert']//div)[2]",
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
    await this.base.waitAndClick(this.Element.nameConvo);
};

async clickThreeDots() {
    await this.base.waitAndClick(this.Element.threeDotsBtn);  
};

async clickRenameConvo() {
    await this.base.waitAndClick(this.Element.renameConvoBtn);  
};

async renameConvo(newName) {
    await this.base.waitAndFill(this.Element.renameInput, newName);  
};

async clickSaveBtn() {
    await this.base.waitAndClick(this.Element.saveBtn);   
};

async verifyRenameSuccessMsg() {
    const nameConvo = this.page.locator(this.Element.nameConvo);
    await expect(nameConvo).toBeVisible();
    const element = this.page.locator(this.Element.renameSuccessMsg);
    await element.waitFor({
        state: 'visible',
        timeout: 5000,

    });
    await expect(element).toBeVisible();
}
}