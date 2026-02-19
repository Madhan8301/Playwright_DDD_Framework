const { chromium, firefox, webkit} = require('playwright');

class Hooks {

    static async setup(ConfigFile){

        let headlessOption = ConfigFile.Head_Less_Run === "No" ? false : true;

        let launchOptions = {
            headless: headlessOption,
            args: ['--start-maximized']
        };

        switch (ConfigFile.browserName) {
            case 'Chromium':
                launchOptions.channel = 'chrome';
                this.browser = await chromium.launch(launchOptions);
                break;

            case 'Firefox':
                this.browser = await firefox.launch(launchOptions);
                break;

            case 'Edge':
                launchOptions.executablePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
                this.browser = await chromium.launch(launchOptions);
                break;

            case 'Chrome':
                launchOptions.channel = 'chrome';
                this.browser = await chromium.launch(launchOptions);
                break;

            case 'Webkit':
                this.browser = await webkit.launch(launchOptions);
                break;
        
            default:
                this.browser = await chromium.launch(launchOptions);
                break;
        }

        let contextOptions = { viewport: null };
        this.context = await this.browser.newContext(contextOptions);
        this.page = await this.context.newPage();
        
    }
}

module.exports = Hooks;