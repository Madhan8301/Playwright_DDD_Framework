import { test, expect, beforeEach } from '@playwright/test';
import ConfigFile from '../Hooks/config.json';
import hooks from '../Hooks/Hooks';

const actionClass = require('../ActionClass/ActionClass');
const Wcontrol = require('../PageControls/WebControl');

beforeEach(async () => {
	await hooks.setup(ConfigFile);
	await Wcontrol.OpenUrl(ConfigFile.App_Url);
});

test("Launch Playwright Application", async ({ }) => {
	await actionClass.LoginToApplication();
	await actionClass.SelectOriginDestination();
});

test("Launch Playwright Application", async ({ }) => {
	await actionClass.LoginToApplication();
});

test("Launch Playwright Application", async ({ }) => {
	await actionClass.LoginToApplication();
});

test("Launch Playwright Application", async ({ }) => {
	await actionClass.LoginToApplication();
});


