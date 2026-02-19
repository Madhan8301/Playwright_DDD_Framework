const Wcontrol = require('../PageControls/WebControl');
const loginPageObject = require('../PageObjects/LoginPage');
const hooks = require('../Hooks/Hooks');

class ActionClass {

    static async LoginToApplication() {
        const title = await hooks.page.title();
        console.log(title);
        await Wcontrol.EnterValueOn(loginPageObject.userName, 'Playwright');
        await Wcontrol.EnterValueOn(loginPageObject.password, 'Playwright');
        await Wcontrol.ClickOn(loginPageObject.loginButton);
    }

}
module.exports = ActionClass;