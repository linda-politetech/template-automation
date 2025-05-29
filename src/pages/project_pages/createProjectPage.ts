import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../../helper/wrapper/PlaywrightWrappers";

export default class CreateProjectPage {
    private base: PlaywrightWrapper;

    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
        projectButton: "(//div[contains (@class, 'flex items-center')])[3]",
        createProjectButton: "//p[normalize-space(text())='Create new']",
        projectNameInput: "(//input[@name='projectName'])[3]",
        projectDescriptionTextarea: "(//textarea[@name='description'])[3]",
        createButton: "(//button[@type='button']/following-sibling::button)[3]",
        createProjectSuccessMsg: "//span[normalize-space(text())='Created successfully']",
        projectNameCheck: "//div[@id='project-dropdown']/div[1]/div[1]/div[1]/div[1]"
    };

    async getCookies() {
        const cookies = await this.page.context().cookies();
        console.log("Cookies: ", cookies);
        return cookies;
    };

    async hoverProjectButton() {
        await this.getCookies();
        await this.base.waitAndHover(this.Elements.projectButton);
    }

    async clickCreateProjectButton() {
        await this.base.waitAndClick(this.Elements.createProjectButton);
    };

    async fillProjectName(name) {
        await this.base.waitAndFill(this.Elements.projectNameInput, name);
    };

    async fillProjectDescription(description) {
        await this.base.waitAndFill(this.Elements.projectDescriptionTextarea, description);
    };

    async clickCreateButton() {
        await this.base.waitAndClick(this.Elements.createButton);
    };

    async verifyProjectCreated() {
        // const nameCheck = this.page.locator(this.Elements.projectNameCheck);
        // await expect(nameCheck).toBeVisible();
        const element = this.page.locator(this.Elements.createProjectSuccessMsg);
        await element.waitFor({
            timeout: 5000,
            state: "visible"
        });
        await expect(element).toBeVisible();
        await this.hoverProjectButton();
        const nameCheck = this.page.locator(this.Elements.projectNameCheck);
        await expect(nameCheck).toBeVisible();
    }
}