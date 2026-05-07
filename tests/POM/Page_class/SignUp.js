export default class SignUp {
    constructor(page) {
        this.page = page;

        this.registerLink = '#signin2';
        this.email = '#sign-username';
        this.password = '#sign-password';
        this.signupbtn = '//*[@onclick="register()"]';
    }

    async navigation(){
        await this.page.goto("https://demoblaze.com/");
    }

    async registerUser(email,password) {
        await this.page.click(this.registerLink)
        await this.page.fill(this.email,email);
        await this.page.fill(this.password,password);
        await this.page.click(this.signupbtn);
    }
}