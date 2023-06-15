class LoginPage{

    get userName(){
        return $('[name="username"]')
    }

    get password(){
        return $('[name="password"]')
    }

    get loginButton(){
        return $('[type="submit"]')
    }

    get errorMessage(){
        return $('p[class*="alert"]')
    }

    async login(user,pass){
        await this.enterUserName(user)
        await this.enterPassword(pass)
        await this.clickOnLogin()
    }

    async enterUserName(user){
        await this.userName.setValue(user)
    }

    async enterPassword(pass){
        await this.password.setValue(pass)
    }

    async clickOnLogin(){
        await this.loginButton.click()
    }

    async isErrorMsgDisplayed() {
        const errorMessage = await this.errorMessage;
        await errorMessage.waitForDisplayed({ timeout: 8000 });
        return await errorMessage.isDisplayed();
    }
      

}

module.exports = new LoginPage();