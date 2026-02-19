import { defineConfig, devices } from '@playwright/test';
import ConfigFile from './Hooks/config.json';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: ConfigFile.Parallel_Execution === 'Yes',
  forbidOnly: !!process.env.CI,
  retries: ConfigFile.Retry_Failure,
  workers: ConfigFile.Workers,
  reporter: 'html',
  use: {
    actionTimeout: 30000,
    screenshot: 'on',
    trace: 'on-first-retry',
    video: 'on',
    contextOptions: {
      recordVideo: {
        dir: './videos'
      }
    }
  },

  expect: {
    timeout: 30000
  },

});

