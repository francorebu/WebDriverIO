const LoginPage = require('../pageobjects/login.page')

describe('demo test',function(){

    it('Login unsuccesful',async()=>{

        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await LoginPage.login('test','test')
        // Check if error message is visible
        // await browser.pause(3000)
        const isVisible = await LoginPage.isErrorMsgDisplayed()
        await expect(isVisible).toBe(true);

    })
})