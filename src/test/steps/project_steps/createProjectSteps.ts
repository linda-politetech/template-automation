import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { fixture } from "../../../hooks/pageFixture";
import Assert from "../../../helper/wrapper/assert";
import CreateProjectPage from "../../../pages/project_pages/createProjectPage";

let createProjectPage: CreateProjectPage;
let assert: Assert;

setDefaultTimeout(60 * 1000 * 2);

When('User hover on the "Project" button', async function () {
    createProjectPage = new CreateProjectPage(fixture.page);
    assert = new Assert(fixture.page);
    await createProjectPage.hoverProjectButton();
});

When('User clicks on the "Create New" button', async function () {
    await createProjectPage.clickCreateProjectButton();
});

When('User types project name as {string}', async function (name) {
    await createProjectPage.fillProjectName(name);
});

When('User types project description as {string}', async function (description) {
    await createProjectPage.fillProjectDescription(description);
});

When('User clicks on the "Create" button', async function () {
    await createProjectPage.clickCreateButton();
});

Then('User should see the project created successfully', async function () {
    await createProjectPage.verifyProjectCreated();
});