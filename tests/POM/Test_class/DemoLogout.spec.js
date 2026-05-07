import {test,expect} from '@playwright/test';
import Logout from '../Page_class/logout.js';
import Login from '../Page_class/Login.js';


test('Verify User Can Logout Successfully', async ({ page }) => {

        const login = new Login(page);
        const logout = new Logout(page);

    
        await login.navigation();
        await login.LoginUser('jatingarg740@gmail.com','Test@123') ;
        // await login.verifySuccessfulLogin();

        await logout.clickLogout() ;
        await logout.verifyLogoutSuccessful();
    });
