import hooks from '../Hooks/Hooks';

class WebControl {

    static async OpenUrl(url) {
        await hooks.page.goto(url);
    }

    static async EnterValueOn(selector, Value) {
        await hooks.page.locator(selector).fill(Value);
    }

    static async ClickOn(selector) {
        await hooks.page.locator(selector).click();
    }


}
module.exports = WebControl;