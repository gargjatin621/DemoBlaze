import {test,expect} from '@playwright/test';
export default class Logout {

    constructor(page) {
        this.page = page;
        this.logoutBtn = '#logout2';
        this.loginBtn = '#login2';
        this.welcomeUser = '#nameofuser';
    }

    async clickLogout() {
        await this.page.click(this.logoutBtn);
    }

    async verifyLogoutSuccessful() {

        await expect(this.page.locator(this.loginBtn)).toBeVisible();
        await expect(this.page.locator(this.welcomeUser)).not.toBeVisible();
    }
}
