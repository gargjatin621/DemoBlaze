import {test,expect} from '@playwright/test';
export default class Addtocart{
    constructor(page){
        this.page = page;

        this.product = "//a[text()='Samsung galaxy s6']";
        this.addtocartbutton = '//*[@onclick="addToCart(1)"]';
        this.cart = '#cartur';
        this.cartproduct = "//td[text()='Samsung galaxy s6']";

    }

    async selectProduct(){
        await this.page.click(this.product);
    }
    
    async clickAddToCart() {

        this.page.on('dialog', async dialog => {
            console.log(dialog.message('Product added.'));
            await dialog.accept();
        });
        await this.page.click(this.addtocartbutton);
    }

    async opencart(){
        await this.page.click(this.cart);
    }

    async verifyProductAddedToCart() {
    await expect(this.page.locator(this.cartproduct)).toBeVisible();
    }
}