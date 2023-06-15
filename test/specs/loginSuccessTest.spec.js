const LoginPage = require('../pageobjects/login.page')
const TopBar = require('../pageobjects/topBar.page')

describe('demo test',function(){

    it('Login succesful',async()=>{

        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await LoginPage.login('Admin','admin123')
        // Check if error message is visible
        // await browser.pause(3000)
        const isVisible = await TopBar.isUserDisplayed()
        await expect(isVisible).toBe(true);

    })
})