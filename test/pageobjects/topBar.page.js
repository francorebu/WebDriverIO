class TopBar{

    get userDropDown(){
        return $('[class*="dropdown-name"]')
    }

    async isUserDisplayed() {
        const userDropDown = await this.userDropDown;
        await userDropDown.waitForDisplayed({ timeout: 8000 });
        return await userDropDown.isDisplayed();
    }

}

module.exports = new TopBar();