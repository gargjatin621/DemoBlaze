import {test,expect} from '@playwright/test';
export default class Login {
    constructor(page) {
        this.page = page;

        this.LoginLink = '#login2';
        this.email = '#loginusername';
        this.password = '#loginpassword';
        this.loginbtn = '//*[@onclick="logIn()"]';
        this.welcomeuser = '#nameofuser';
    }

    async navigation(){
        await this.page.goto("https://demoblaze.com/");
    }

    async LoginUser(email,password) {
        await this.page.click(this.LoginLink)
        await this.page.fill(this.email,email);
        await this.page.fill(this.password,password);
        await this.page.click(this.loginbtn);
    }

    async verifySuccessfulLogin() {
        await expect(this.page.locator(this.welcomeuser)).toContainText('Welcome');
    }
}