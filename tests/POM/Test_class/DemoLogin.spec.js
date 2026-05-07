import {test,expect} from '@playwright/test';
import Login from '../Page_class/Login.js';

test.skip('Login with valid credentials ', async ({ page }) => {

    const login = new Login(page);

    await login.navigation();
    await login.LoginUser('jatingarg740@gmail.com','Test@123') ;
    await login.verifySuccessfulLogin();
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+"Login.png",fullPage:true});

   });

   
test('Login with Invalid credentials ', async ({ page }) => {

    const login = new Login(page);

    await login.navigation();
    await login.LoginUser('jatin@gmail.com','Tes123') ;

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain("User does not exist");
        await dialog.accept();
    })
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+"Login.png",fullPage:true});
})

    test('Login with Empty Password ', async ({ page }) => {

    const login = new Login(page);

    await login.navigation();
    await login.LoginUser('jatin@gmail.com','') ;

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain("Please fill out Username and Password.");
        await dialog.accept();
    })
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+"Login.png",fullPage:true});

})

    test('Login with Empty Email ', async ({ page }) => {

    const login = new Login(page);

    await login.navigation();
    await login.LoginUser('','Tes123') ;

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain("Please fill out Username and Password.");
    await dialog.accept();
    })
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+"Login.png",fullPage:true});
   })

   test('Login with Empty Fields ', async ({ page }) => {

    const login = new Login(page);

    await login.navigation();
    await login.LoginUser('','') ;

    page.on('dialog',async dialog=>{
        expect(dialog.message()).toContain("Please fill out Username and Password.");
    await dialog.accept();
    })
    await page.screenshot({path:'tests/ScreenShot/'+Date.now()+"Login.png",fullPage:true});
});