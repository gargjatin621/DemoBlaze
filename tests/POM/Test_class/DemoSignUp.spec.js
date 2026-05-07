import { test, expect } from '@playwright/test';
import SignUp from '../Page_class/SignUp';

test('SignUp', async ({ page }) => {

    const signUp = new SignUp(page);

    await signUp.navigation();
    await signUp.registerUser('jatingarg740@gmail.com','Test@123');
});