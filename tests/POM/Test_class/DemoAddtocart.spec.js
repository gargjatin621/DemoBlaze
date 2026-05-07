import {test,expect} from '@playwright/test';
import Addtocart from '../Page_class/Addtocart.js';
import Login from '../Page_class/Login.js';


test('Add Product To Cart',async({page}) => {

    const login = new Login(page); 
    const atc = new Addtocart(page);
    
    await login.navigation();
    await login.LoginUser('jatingarg740@gmail.com','Test@123') ;
    await login.verifySuccessfulLogin();

    await atc.selectProduct();
    await atc.clickAddToCart();
    await atc.opencart();
    await atc.verifyProductAddedToCart();
    
})